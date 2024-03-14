import { db } from "./db";

import { Prisma } from "@prisma/client";

import { findUserById } from "@/data/user";

export const getUserTrash = async (userId: string, page: number) => {
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
      deletedAt: { not: null },
    };

    const totalCount = await db.word.count({
      where: whereClause,
    });

    const dictionary = await db.word.findMany({
      orderBy: {
        deletedAt: "desc",
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
