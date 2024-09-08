import CustomImage from "@/components/comp/Image";
import useFormStore from "@/zustand";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { formData } = useFormStore();
  return (
    <main className="relative py-[1.4rem] px-[2.5rem] min-h-screen bg-[#F7FFEF]  backgroundImg">
      <figure className="">
        <Image src="/logo.svg" alt="logo" width={104.28} height={78.1} />
      </figure>
      <section className="flex flex-col justify-center items-center translate-y-[10%]  w-7/12 mx-auto gap-y-[3.6rem] ">
        <div className="w-full px-[3.5rem] py-[1.3rem] bg-white rounded-lg form-container border border-[#999999]">
          <div>
            <h2 className="flex justify-center">My Details</h2>
            <div className="space-y-4">
              <figure>
                <CustomImage
                  src={formData.image || "/profile.png"}
                  width="232"
                  height="233"
                  alt="profile picture"
                />
              </figure>
              <div className="space-y-8">
                <div>
                  <h3>Personal Details</h3>
                  <div className="flex flex-wrap gap-[2.4rem]">
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        First Name:
                      </label>
                      <span>{formData.firstName || "Raju"}</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        Middle Name:
                      </label>
                      <span>{formData.middleName || "Ram"}</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        Last Name:
                      </label>
                      <span>{formData.lastName || "Pandey"}</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        Phone:
                      </label>
                      <span>{formData.phone || 984512515}</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        Birth Date:
                      </label>
                      <span>22/12/1998</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        Gender:
                      </label>
                      <span>female</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>Address</h3>
                  <div className="flex flex-wrap gap-[2.4rem]">
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        Country:
                      </label>
                      <span>Nepal</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        District:
                      </label>
                      <span>Bagmati</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        Municipality/local:
                      </label>
                      <span>Kathmandu</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        City:
                      </label>
                      <span>Kathmandu</span>
                    </div>
                    <div className="detail-div">
                      <label className=" font-extrabold" htmlFor="">
                        Ward:
                      </label>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
