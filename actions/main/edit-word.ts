"use server";

import * as z from "zod";
import { editWordSchema } from "@/schemas";

import { db } from "@/lib/db";

import { findUserById } from "@/data/user";

import { revalidatePath } from "next/cache";

export const editWord = async (
  values: z.infer<typeof editWordSchema>,
  id: string,
  userId: string
) => {
  const validatedFields = editWordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  if (!userId) {
    return { error: "Unauthorized!" };
  }

  const user = await findUserById(userId);

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const { en, ua } = values;

  const newData = {
    word: en,
    translation: ua,
  };

  await db.word.update({
    where: {
      id,
      userId,
    },
    data: {
      ...newData,
    },
  });

  revalidatePath("/");

  return { success: `Word ${en} was updated!` };
};
