import Image from "next/image";
import React from "react";

const CImage = () => {
  return (
    <figure>
      <Image
        src="/logo.svg"
        alt="logo"
        width={104.28}
        height={78.1}
        className="rounded-[61px]"
      />
    </figure>
  );
};

export default CImage;
