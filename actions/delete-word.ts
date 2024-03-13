"use server";

import { findUserById } from "@/data/user";
import { db } from "@/lib/db";

import { revalidatePath } from "next/cache";

export const deleteWord = async (id: string, userId: string) => {
  if (!userId) {
    return { error: "Unauthorized!" };
  }

  const user = findUserById(userId);

  if (!user) {
    return { error: "Unauthorized!" };
  }

  await db.word.delete({
    where: {
      id,
      userId,
    },
  });

  revalidatePath("/");

  return { success: "Word was deleted!" };
};
