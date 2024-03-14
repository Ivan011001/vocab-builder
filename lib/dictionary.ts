import { db } from "./db";

import { Prisma, VerbType } from "@prisma/client";

import { findUserById } from "@/data/user";

export const getUserDictionary = async (
  userId: string | null | undefined,
  search: string,
  category: string,
  page: number,
  verbType?: VerbType
) => {
  try {
    if (!userId) {
      return null;
    }

    const user = await findUserById(userId);

    if (!user) {
      return null;
    }

    const skip = (page - 1) * 7;

    const whereClause: Prisma.WordWhereInput = {
      userId,
      word: {
        contains: search,
        mode: "insensitive",
      },
      deletedAt: null,
    };

    if (category !== "") {
      whereClause.category = {
        equals: category,
        mode: "insensitive",
      };
    }

    if (verbType) {
      whereClause.verbType = {
        equals: verbType,
      };
    }

    const totalCount = await db.word.count({
      where: whereClause,
    });

    const dictionary = await db.word.findMany({
      orderBy: {
        updatedAt: "desc",
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
