"use server";

import { db } from "@/lib/db";

import { findUserById } from "@/data/user";

import { revalidatePath } from "next/cache";

export const restoreWord = async (id: string, userId: string) => {
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
    return { error: "Word does not exist!" };
  }

  await db.word.update({
    where: {
      id,
      userId,
    },
    data: {
      deletedAt: null,
    },
  });

  revalidatePath("/");
};
