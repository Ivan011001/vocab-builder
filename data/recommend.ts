import { db } from "@/lib/db";

export const getRecommend = async () => {
  try {
    const recommend = await db.recommend.findMany();

    return recommend;
  } catch {
    return null;
  }
};
