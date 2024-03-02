import { db } from "@/lib/db";

export const findUserByEmail = async (email: string) => {
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

export const findUserById = async (id: string) => {
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
