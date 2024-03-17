"use server";

import { findUserById } from "@/data/user";
import { db } from "@/lib/db";

export const getTasksByUserId = async (userId: string) => {
  if (!userId) {
    return null;
  }

  const user = await findUserById(userId);

  if (!user) {
    return null;
  }

  const tasks = await db.word.findMany({
    where: {
      userId,
      deletedAt: null,
      progress: {
        lt: 100,
      },
    },
    select: {
      id: true,
      word: true,
      translation: true,
    },
  });

  return tasks;
};
