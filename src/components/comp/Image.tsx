import Image from "next/image";
import React from "react";

const CustomImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: string;
  height: string;
}) => {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={parseFloat(width)}
        height={parseFloat(height)}
        className="rounded-[61px]"
      />
    </figure>
  );
};
export default CustomImage;
