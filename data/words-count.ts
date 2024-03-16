"use server";

import { db } from "@/lib/db";

export const getUserWordsCount = async (userId: string) => {
  try {
    const wordsCount = await db.word.count({
      where: {
        userId,
      },
    });

    return wordsCount;
  } catch {
    return null;
  }
};
