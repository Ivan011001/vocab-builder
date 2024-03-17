"use client";

import { useCurrentUser } from "@/hooks";
import { useEffect, useState } from "react";

import ProgressBar from "./_components/progress-bar";
import TrainingRoom from "./_components/training-room";
import WordsEmpty from "@/components/main/word-empty";
import { Oval } from "react-loader-spinner";

import { getTasksByUserId } from "@/actions/main/tasks";

import { ITask } from "@/types";

const TrainingPage = () => {
  const user = useCurrentUser();

  const [tasks, setTasks] = useState<ITask[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentStreak, setCurrentStreak] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const data = await getTasksByUserId(user?.id!);

      setTasks(data);
      setIsLoading(false);
    };

    fetch();
  }, [user]);

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Oval />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-y-2 md:gap-y-4">
      {tasks?.length !== 0 ? (
        <>
          <ProgressBar
            totalCount={tasks?.length! || 0}
            currentStreak={currentStreak}
          />

          <div className="flex-grow">
            <TrainingRoom tasks={tasks!} setCurrentStreak={setCurrentStreak} />
          </div>
        </>
      ) : (
        <WordsEmpty
          label="You don't have a single word to learn right now. "
          description="Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study."
          buttonHref="/recommend"
          buttonLabel="Add word"
          backButtonHref="/"
          backButtonLabel="Cancel"
        />
      )}
    </div>
  );
};

export default TrainingPage;
