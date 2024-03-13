"use server";

import { db } from "@/lib/db";

export const createRecommend = async (
  word: string,
  translation: string,
  category: string
) => {
  const recommendedExists = await db.recommend.findFirst({
    where: {
      word: {
        equals: word,
        mode: "insensitive",
      },
    },
  });

  if (recommendedExists) {
    return;
  }

  await db.recommend.create({
    data: {
      word,
      translation,
      category,
    },
  });
};
