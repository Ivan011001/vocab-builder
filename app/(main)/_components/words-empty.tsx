import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import BackButton from "@/components/auth/back-button";

const WordsEmpty = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row-reverse items-center justify-center gap-8">
      <Image width={230} height={203} src="/report.png" alt="Report image" />

      <div className="flex flex-col items-center justify-center gap-y-4">
        <p className="text-neutral-900 text-base md:text-xl font-medium">
          There are no words matching this type of query
        </p>

        <Button asChild>
          <Link href="/recommend">Add word</Link>
        </Button>

        <BackButton label="Home" href="/" />
      </div>
    </div>
  );
};

export default WordsEmpty;
