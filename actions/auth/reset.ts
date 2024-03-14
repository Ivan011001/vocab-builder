"use server";

import * as z from "zod";
import { resetSchema } from "@/schemas";
import { findUserByEmail } from "@/data/user";

import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetToken } from "@/lib/mail";

export const reset = async (values: z.infer<typeof resetSchema>) => {
  const validatedFields = resetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await findUserByEmail(email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetToken(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent!" };
};
