import * as z from "zod";

import { UserRole } from "@prisma/client";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email format",
  }),

  password: z.string().min(1, {
    message: "Password is required",
  }),

  code: z.optional(z.string()),
});

export const registerSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),

  email: z.string().email({
    message: "Invalid email format",
  }),

  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const resetSchema = z.object({
  email: z.string().email({
    message: "Invalid email format",
  }),
});

export const newPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const settingsSchema = z
  .object({
    name: z.optional(
      z.string().min(1, {
        message: "Name is required",
      })
    ),

    email: z.optional(
      z.string().email({
        message: "Invalid email format",
      })
    ),

    role: z.enum([UserRole.ADMIN, UserRole.USER]),

    password: z.optional(z.string().min(6)),

    newPassword: z.optional(z.string().min(6)),

    isTwoFactorEnabled: z.optional(z.boolean()),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    { message: "New password is required", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    { message: "Password is required", path: ["password"] }
  );

export const addWordSchema = z.object({
  categorie: z.string(),
  verbType: z.string(),
  en: z
    .string()
    .refine((value) => /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/.test(value ?? ""), {
      message: "Enter word in English",
    }),

  ua: z
    .string()
    .refine(
      (value) => /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u.test(value ?? ""),
      {
        message: "Enter word in Ukrainian",
      }
    ),
});
