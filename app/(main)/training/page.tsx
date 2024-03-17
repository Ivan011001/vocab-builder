import ProgressBar from "./_components/progress-bar";
import TrainingRoom from "./_components/training-room";

const TrainingPage = () => {
  return (
    <div className="h-full flex flex-col gap-y-2 md:gap-y-4">
      <ProgressBar />

      <div className="flex-grow">
        <TrainingRoom />
      </div>
    </div>
  );
};

export default TrainingPage;
