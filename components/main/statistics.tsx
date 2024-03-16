import { currentUser } from "@/lib/auth";

import { getUserWordsCount } from "@/data/words-count";

const Statistics = async () => {
  const user = await currentUser();

  const wordsCount = await getUserWordsCount(user?.id!);

  return (
    <div className="flex items-center gap-x-2">
      <p className="text-neutral-900 text-opacity-50 text-sm md:text-base font-medium md:leading-normal">
        To study:
      </p>
      <p className="text-neutral-900 text-xl font-medium">{wordsCount}</p>
    </div>
  );
};

export default Statistics;
