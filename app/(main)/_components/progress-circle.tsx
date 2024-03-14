"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface IProgressCircleProps {
  progress: number;
}

const ProgressCircle = ({ progress }: IProgressCircleProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <p className="hidden md:block text-neutral-900 text-base font-medium">
        {progress}%
      </p>
      <div className="h-6 w-6">
        <CircularProgressbar
          value={progress}
          strokeWidth={18}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: `#2BD627`,
            trailColor: "#D4F8D3",
          })}
        />
      </div>
    </div>
  );
};

export default ProgressCircle;
