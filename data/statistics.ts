"use server";

import { db } from "@/lib/db";

export const getUserWordsCount = async (userId: string) => {
  try {
    const wordsCount = await db.word.count({
      where: {
        userId,
        deletedAt: null,
        progress: {
          lt: 100,
        },
      },
    });

    return wordsCount;
  } catch {
    return null;
  }
};
