"use client";

import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const VerbType = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onHandleChange = (verbType: "regular" | "irregular") => {
    const params = new URLSearchParams(searchParams);

    if (verbType) {
      params.set("verbType", verbType);
    } else {
      params.delete("verbType");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <RadioGroup
      className="flex items-center gap-x-4"
      defaultValue={searchParams.get("verbType")?.toString()}
    >
      <div
        className="flex items-center gap-x-2"
        onClick={() => onHandleChange("regular")}
      >
        <RadioGroupItem value="regular" id="regular" />
        <Label
          htmlFor="regular"
          className="text-neutral-900 text-xs md:text-sm font-normal"
        >
          Regular
        </Label>
      </div>
      <div
        className="flex items-center gap-x-2"
        onClick={() => onHandleChange("irregular")}
      >
        <RadioGroupItem value="irregular" id="irregular" />
        <Label
          htmlFor="irregular"
          className="text-neutral-900 text-xs md:text-sm font-normal"
        >
          Irregular
        </Label>
      </div>
    </RadioGroup>
  );
};

export default VerbType;
