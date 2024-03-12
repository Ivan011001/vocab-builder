import { db } from "./db";

export const getUserDictionary = async (userId: string | null | undefined) => {
  try {
    if (!userId) {
      return;
    }

    const dictionary = await db.word.findMany({
      where: {
        userId,
      },
    });

    return dictionary;
  } catch {
    return null;
  }
};
