"use server";

import { db } from "@/lib/db";

import { findUserById } from "@/data/user";

import { revalidatePath } from "next/cache";

export const softDeleteWord = async (id: string, userId: string) => {
  if (!userId) {
    return { error: "Unauthorized!" };
  }

  const user = await findUserById(userId);

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const existingWord = await db.word.findFirst({
    where: {
      userId,
      id,
    },
  });

  if (!existingWord) {
    return { error: "Word does not exist!" };
  }

  await db.word.update({
    where: {
      id,
      userId,
    },

    data: {
      deletedAt: new Date(),
    },
  });

  revalidatePath("/");

  return { success: "Word was deleted!" };
};
