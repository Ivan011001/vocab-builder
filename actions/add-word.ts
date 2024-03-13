"use server";

import * as z from "zod";
import { addWordSchema } from "@/schemas";

import { db } from "@/lib/db";

import { findUserById } from "@/data/user";
import { createRecommend } from "./create-recommend";

import { revalidatePath } from "next/cache";

export const addWord = async (
  values: z.infer<typeof addWordSchema>,
  userId: string | null | undefined
) => {
  const validatedFileds = addWordSchema.safeParse(values);

  if (!validatedFileds.success) {
    return { error: "Invalid fileds!" };
  }

  const { en, ua, category } = validatedFileds.data;

  if (!userId) {
    return { error: "Unauthorized!" };
  }

  const user = await findUserById(userId);

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const wordExists = await db.word.findFirst({
    where: {
      userId,
      word: {
        equals: en,
        mode: "insensitive",
      },
    },
  });

  if (wordExists) {
    return { error: "Word is already in dictionary!" };
  }

  await db.word.create({
    data: {
      word: en,
      translation: ua,
      category,
      progress: 0,
      userId,
    },
  });

  await createRecommend(en, ua, category);

  revalidatePath("/");

  return { success: "Word was added!" };
};
