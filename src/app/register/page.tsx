"use client";
import { useState } from "react";

import Register1 from "@/components/Register/Register1";
import Register2 from "@/components/Register/Register2";
import Register3 from "@/components/Register/Register3";
import Register4 from "@/components/Register/Register4";

import Image from "next/image";
import React from "react";

const page = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step > 0) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
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
        <div className="w-full px-[3.5rem] py-[1.3rem] bg-white rounded-xl form-container border border-[#999999]">
          {step === 1 ? (
            <Register1 next={nextStep} />
          ) : step === 2 ? (
            <Register2 back={prevStep} next={nextStep} />
          ) : step === 3 ? (
            <Register3 back={prevStep} next={nextStep} />
          ) : (
            <Register4 back={prevStep} />
          )}
        </div>
      </section>
    </main>
  );
};

export default page;
