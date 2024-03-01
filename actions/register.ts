"use server";

import * as z from "zod";
import { registerSchema } from "@/schemas";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatingFields = registerSchema.safeParse(values);

  if (!validatingFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};
