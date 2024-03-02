import { db } from "@/lib/db";

export const findUserById = async (email: string) => {
  try {
    const user = db.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export const findUserByEmail = async (id: string) => {
  try {
    const user = db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch {
    return null;
  }
};
