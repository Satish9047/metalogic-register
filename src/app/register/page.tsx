import Register1 from "@/components/Register/Register1";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="relative py-[1.4rem] px-[2.5rem] min-h-screen bg-[#F7FFEF]  backgroundImg">
      <figure className="">
        <Image src="/logo.svg" alt="logo" width={104.28} height={78.1} />
      </figure>
      <section className="flex flex-col justify-center items-center  w-7/12 mx-auto gap-y-[3.6rem] ">
        <h1>Register</h1>
        <div>
          <input type="range" />
        </div>
        <div className="w-full px-[3.5rem] py-[1.3rem] bg-white rounded-lg form-container border border-[#999999]">
          <Register1 />
        </div>
      </section>
    </main>
  );
};

export default page;
