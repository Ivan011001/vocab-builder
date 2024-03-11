"use server";

import * as z from "zod";
import { addWordSchema } from "@/schemas";

import { db } from "@/lib/db";

export const addWord = async (values: z.infer<typeof addWordSchema>) => {
  const validatedFileds = addWordSchema.safeParse(values);

  if (!validatedFileds.success) {
    return { error: "Invalid fileds!" };
  }

  await db.categorie.findMany();

  return { success: "Word was added!" };
};
