"use server";

import { db } from "@/lib/db";

export const getUserWordById = async (id: string, userId: string) => {
  try {
    const word = await db.word.findFirst({
      where: {
        id,
        userId,
      },
    });

    return word;
  } catch {
    return null;
  }
};
