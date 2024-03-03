import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email format",
  }),

  password: z.string().min(1, {
    message: "Password is required",
  }),
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
