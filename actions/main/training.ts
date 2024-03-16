"use server";

import { db } from "@/lib/db";

import { findUserById } from "@/data/user";

import { revalidatePath } from "next/cache";

export const training = async (
  id: string,
  userId: string,
  correct: boolean
) => {
  if (!userId) {
    return { error: "Unauthorized!" };
  }

  const user = await findUserById(userId);

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const existingWord = await db.word.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!existingWord) {
    return { error: "Word does not exsit!" };
  }

  await db.word.update({
    where: {
      id,
      userId,
    },
    data: {
      ...existingWord,
      progress: (existingWord.progress += 25),
    },
  });

  revalidatePath("/");
};
