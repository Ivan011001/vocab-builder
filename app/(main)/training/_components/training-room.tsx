import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

import { training } from "@/actions/main/training";

const TrainingRoom = async () => {
  const user = await currentUser();

  const words = await db.word.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <div>
      {words.map((word) => (
        <div key={word.id} className="flex items-center gap-x-2">
          <p>{word.word}</p>
          <form
            action={async () => {
              "use server";

              training(word.id, user?.id!, true);
            }}
          >
            <button className="bg-red-500">Learn</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default TrainingRoom;
