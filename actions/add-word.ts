"use server";

import * as z from "zod";
import { addWordSchema } from "@/schemas";

export const addWord = async (values: z.infer<typeof addWordSchema>) => {
  const validatedFileds = addWordSchema.safeParse(values);

  if (!validatedFileds.success) {
    return { error: "Invalid fileds!" };
  }

  if (validatedFileds.data.categorie === "verb") {
    validatedFileds.data.verbType = "";
  }

  console.log(validatedFileds.data);
  return { success: "Word was added!" };
};
