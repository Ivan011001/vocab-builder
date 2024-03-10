import AddWordButton from "./add-word-button";
import Filters from "./filters";
import Statistics from "./statistics";
import TrainingLink from "./training-link";

interface IDashboardProps {
  addWord?: boolean;
}

const Dashboard = ({ addWord }: IDashboardProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-between gap-10 md:gap-7">
      <Filters />

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
