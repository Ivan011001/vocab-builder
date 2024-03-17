"use server";

import { findUserById } from "@/data/user";
import { getUserWordById } from "@/data/word";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const train = async (id: string, userId: string, answer: string) => {
  if (!userId) {
    return { error: "Unauthorized!" };
  }

  const user = await findUserById(userId);

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const existingWord = await getUserWordById(id, userId);

  if (!existingWord) {
    return { error: "Word does not exist!" };
  }

  const isCorrect =
    answer.toLowerCase() === existingWord.translation.toLowerCase();

  if (isCorrect) {
    await db.word.update({
      where: {
        id,
        userId,
      },

      data: {
        ...existingWord,
        progress: (existingWord.progress += 20),
      },
    });
    revalidatePath("/");

    return { isCorrect: true, word: existingWord.word };
  }

  if (!isCorrect) {
    await db.word.update({
      where: {
        id,
        userId,
      },

      data: {
        ...existingWord,
        progress: (existingWord.progress += 5),
      },
    });
  }
  revalidatePath("/");

  return { isCorrect: false, word: existingWord.word };
};
