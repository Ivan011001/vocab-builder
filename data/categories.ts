"use server";

import { db } from "@/lib/db";

export const getCategories = async () => {
  try {
    const categories = await db.categorie.findMany();

    return categories;
  } catch (error) {
    return null;
  }
};
