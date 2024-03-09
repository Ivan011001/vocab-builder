import Image from "next/image";

const AuthImage = () => {
  return (
    <Image
      className="w-[247px] h-[191px] lg:h-[435px] lg:w-[498px]"
      width={498}
      height={435}
      alt="Reading book"
      src="/reading.png"
    />
  );
};

export default AuthImage;
