import CardDesign from "@/common/cardDesing";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-[#c8d1df]">
      <div className="relative w-full h-full ">
        <Image
          src={
            "https://i.pinimg.com/originals/6d/3d/c6/6d3dc692d186313e5dcf3da0a4c0bf34.gif"
          }
          alt="Coder"
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={
            "https://i.pinimg.com/originals/42/b4/22/42b4229a9ec3145edaa895b2415dd720.gif"
          }
          alt="Coder"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute">
        <CardDesign />
      </div>
    </div>
  );
};

export default page;
