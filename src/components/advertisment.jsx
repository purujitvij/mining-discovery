import Image from "next/image";
import React from "react";

export default function Advertisment({ image, alt }) {
  return (
    <div className=" flex flex-col gap-4 py-4">
      <Image src={image} alt={"ad-images"} width={212} height={625} />
    </div>
  );
}
