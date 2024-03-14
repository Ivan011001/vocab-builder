"use server";

import bcrypt from "bcryptjs";

import * as z from "zod";
import { registerSchema } from "@/schemas";

import { findUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatingFields = registerSchema.safeParse(values);

  if (!validatingFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validatingFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const userExists = await findUserByEmail(email);

  if (userExists) {
    return {
      error: "Email already in use!",
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent!" };
};
