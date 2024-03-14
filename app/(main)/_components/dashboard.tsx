import AddWordButton from "./add-word-button";
import Filters from "./filters";
import Statistics from "@/components/main/statistics";
import TrainingLink from "@/components/main/training-link";

import { cn } from "@/lib/utils";

interface IDashboardProps {
  addWord?: boolean;
  isVerb?: boolean;
}

const Dashboard = ({ addWord, isVerb }: IDashboardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row lg:justify-between items-center justify-between md:gap-7",
        isVerb ? "gap-[16px]" : "gap-10"
      )}
    >
      <Filters isVerb={isVerb} />

      <div className="w-full lg:w-auto flex flex-col md:flex-row gap-2 md:gap-4">
        <Statistics />

        <div className="flex items-center gap-4">
          {addWord && <AddWordButton />}

          <TrainingLink />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
