"use client";
import { useState } from "react";
import Image from "next/image";
import useFormStore from "@/zustand/formStore";

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
  const { addFormData, formData } = useFormStore();
  const [imageSrc, setImageSrc] = useState<string>(src);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hello");
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const uploadedImageUrl = reader.result as string;
        setImageSrc(uploadedImageUrl);
        addFormData("image", uploadedImageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <figure>
      <Image
        src={imageSrc || formData.image}
        alt={alt}
        width={parseFloat(width)}
        height={parseFloat(height)}
        className="rounded-[61px]"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
        id="image-upload"
      />
    </figure>
  );
};

export default CustomImage;
