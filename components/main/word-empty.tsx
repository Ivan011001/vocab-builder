import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import BackButton from "@/components/auth/back-button";

interface IWordsEmptyProps {
  label: string;
  description?: string;
  buttonHref: string;
  buttonLabel: string;
  backButtonHref: string;
  backButtonLabel: string;
}

const WordsEmpty = ({
  label,
  description,
  buttonHref,
  buttonLabel,
  backButtonHref,
  backButtonLabel,
}: IWordsEmptyProps) => {
  return (
    <div className="h-full flex flex-col justify-between md:justify-center md:gap-[64px]">
      <div className="flex-grow-0 sm:h-full md:h-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:items-center lg:gap-8">
        <Image
          width={205}
          height={230}
          src="/report.png"
          alt="Report image"
          priority
          className="h-[166px] w-[144px] md:h-[230px] md:w-[205px]"
        />

        <div className="flex flex-col items-start justify-center gap-y-4 md:gap-y-8 max-w-96">
          <p className="text-neutral-900 text-base md:text-xl font-medium leading-normal">
            {label}
          </p>

          {description && (
            <p className="text-neutral-900 text-sm md:text-base font-normal leading-normal">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-2 md:gap-[10px]">
        <Button asChild>
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>

        <BackButton label={backButtonLabel} href={backButtonHref} />
      </div>
    </div>
  );
};

export default WordsEmpty;
