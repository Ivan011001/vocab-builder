import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export const getRecommend = async (
  search: string,
  category: string,
  page: number
) => {
  try {
    const skip = (page - 1) * 7;

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

    const totalCount = await db.recommend.count({
      where: whereClause,
    });

    const dictionary = await db.recommend.findMany({
      orderBy: {
        word: "asc",
      },
      take: 7,
      skip,
      where: whereClause,
    });

    const totalPages = Math.ceil(totalCount / 7);
    const hasPrevPage = page > 1;
    const hasNextPage = skip + dictionary.length < totalCount;

    return {
      data: dictionary,
      meta: {
        totalCount,
        currentPage: page,
        totalPages,
        hasPrevPage,
        hasNextPage,
      },
    };
  } catch {
    return null;
  }
};
