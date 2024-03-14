import * as z from "zod";

import { VerbType } from "@prisma/client";

export const addWordSchema = z
  .object({
    category: z.string(),
    verbType: z.optional(z.enum([VerbType.regular, VerbType.irregular])),
    en: z
      .string()
      .refine(
        (value) => /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/.test(value ?? ""),
        {
          message: "Enter word in English",
        }
      ),

    ua: z
      .string()
      .refine(
        (value) => /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u.test(value ?? ""),
        {
          message: "Enter word in Ukrainian",
        }
      ),
  })
  .refine(
    (data) => {
      if (!data.category) {
        return false;
      }

      return true;
    },
    { message: "Category is required", path: ["category"] }
  )
  .refine(
    (data) => {
      if (!data.verbType && data.category === "verb") {
        return false;
      }

      return true;
    },
    { message: "Verb type is required", path: ["verbType"] }
  );
