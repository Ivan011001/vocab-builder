import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export const getRecommend = async (
  search: string,
  category: string,
  page: number
) => {
  try {
    const skip = (page - 1) * 7;

    const totalCount = await db.word.count({
      where: {
        category: {
          equals: category,
          mode: "insensitive",
        },
        word: {
          contains: search,
          mode: "insensitive",
        },
      },
    });

    const whereClause: Prisma.RecommendWhereInput = {
      word: {
        contains: search,
        mode: "insensitive",
      },
    };

    if (category !== "") {
      whereClause.category = {
        equals: category,
        mode: "insensitive",
      };
    }

    const dictionary = await db.recommend.findMany({
      take: 7,
      skip,
      where: whereClause,
    });

    const hasPrevPage = page > 1;
    const hasNextPage = skip + dictionary.length < totalCount;

    return {
      data: dictionary,
      meta: {
        totalCount,
        currentPage: page,
        hasPrevPage,
        hasNextPage,
      },
    };
  } catch {
    return null;
  }
};
