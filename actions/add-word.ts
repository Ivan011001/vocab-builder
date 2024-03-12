"use server";

import * as z from "zod";
import { addWordSchema } from "@/schemas";

import { db } from "@/lib/db";

export const addWord = async (values: z.infer<typeof addWordSchema>) => {
  const validatedFileds = addWordSchema.safeParse(values);

  if (!validatedFileds.success) {
    return { error: "Invalid fileds!" };
  }

  const { en, ua, category } = validatedFileds.data;

  await db.recommend.create({
    data: {
      word: en,
      translation: ua,
      category,
    },
  });

  return { success: "Word was added!" };
};
