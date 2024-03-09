import Image from "next/image";

const AuthImage = () => {
  return (
    <Image
      className="w-[247px] h-[191px] lg:h-[405px] lg:w-[498px]"
      width={498}
      height={405}
      alt="Reading book"
      src="/reading.png"
      priority
    />
  );
};

export default AuthImage;
