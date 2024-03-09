import Image from "next/image";

const AuthImage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="w-[247px] h-[191px]"
        width={498}
        height={435}
        alt="Reading book"
        src="/reading.png"
      />
    </div>
  );
};

export default AuthImage;
