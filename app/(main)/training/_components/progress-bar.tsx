"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface IProgressBarProps {
  totalCount: number;
  currentStreak: number;
}

const ProgressBar = ({ totalCount, currentStreak }: IProgressBarProps) => {
  return (
    <div className="w-full flex items-center justify-end">
      <div className="h-11 w-11 md:h-[58px] md:w-[58px] relative">
        <CircularProgressbar
          value={currentStreak}
          maxValue={totalCount!}
          strokeWidth={10}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            strokeLinecap: "round",
            textSize: "30px",

            pathColor: `#85AA9F`,
            trailColor: "#FFFFFF",
          })}
        />

        <p className="absolute bottom-[50%] right-[50%] translate-y-[50%] translate-x-[50%] text-center text-neutral-900 text-base font-medium">
          {currentStreak}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
