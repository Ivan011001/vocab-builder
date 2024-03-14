import * as z from "zod";

export const editWordSchema = z.object({
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
