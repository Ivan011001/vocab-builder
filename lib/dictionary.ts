import { Prisma } from "@prisma/client";
import { db } from "./db";

export const getUserDictionary = async (
  userId: string | null | undefined,
  search: string,
  category: string,
  page: number
) => {
  try {
    if (!userId) {
      return null;
    }

    const skip = (page - 1) * 7;

    const whereClause: Prisma.WordWhereInput = {
      userId,
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

    const totalCount = await db.word.count({
      where: whereClause,
    });

    const dictionary = await db.word.findMany({
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
