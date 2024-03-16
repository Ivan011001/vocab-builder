"use client";

import { getUserWordsCount } from "@/data/words-count";
import { useCurrentUser } from "@/hooks";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ProgressBar = () => {
  const [wordsCount, setWordsCount] = useState<number | null>(null);
  const user = useCurrentUser();

  useEffect(() => {
    const fetch = async () => {
      const data = await getUserWordsCount(user?.id!);

      setWordsCount(data);
    };

    fetch();
  }, [user]);

  const currentStrike = 1;

  return (
    <div className="w-full flex items-center justify-end">
      <div className="h-11 w-11 relative">
        <CircularProgressbar
          value={currentStrike}
          maxValue={wordsCount!}
          strokeWidth={10}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            strokeLinecap: "round",
            textSize: "30px",

            pathColor: `#85AA9F`,
            trailColor: "#FFFFFF",
          })}
        />

        <p className="absolute bottom-[50%] right-[50%] translate-y-[50%] translate-x-[50%]">
          {currentStrike}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;