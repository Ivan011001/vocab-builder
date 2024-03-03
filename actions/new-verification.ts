"use server";

import { db } from "@/lib/db";

import { findUserByEmail } from "@/data/user";

import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = existingToken.expires < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const user = await findUserByEmail(existingToken.email);

  if (!user) {
    return { error: "Email does not exist!" };
  }

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Email was verified!" };
};
