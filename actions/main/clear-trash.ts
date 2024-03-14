"use server";

import { db } from "@/lib/db";

import { findUserById } from "@/data/user";

import { revalidatePath } from "next/cache";

export const clearTrash = async (userId: string) => {
  if (!userId) {
    return { error: "Unauthorized" };
  }

  const user = await findUserById(userId);

  if (!user) {
    return { error: "Unauthorized" };
  }

  await db.word.deleteMany({
    where: {
      userId,
      deletedAt: { not: null },
    },
  });

  revalidatePath("/trash");

  return { success: "Trash was cleared!" };
};
