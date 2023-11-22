import React, { useState, useRef } from "react";
import { NextPage } from "next";

import { HomeFooter } from "../components/Home/HomeFooter";
import { Discord } from "../components/Icons/Discord";
import { Envelop } from "../components/Icons/Envelop";
import { Instagram } from "../components/Icons/Instagram";
import { Twitter } from "../components/Icons/Twitter";
import { ScrollDownIcon } from "../components/Icons/ScrollDownIcon";

import { Layout } from "../components/Layout";
import { DiasporaBackgroundImg } from "../components/DiasporaBackgroundImg";

import styles from "./animation.module.css";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const secondPage = useRef(null);
  const scrollToSecondPage = () => {
    secondPage.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  return (
    <Layout showLogo>
      <div className="relative bg-home-bg-labs bg-cover min-h-screen flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r mix-blend-overlay from-custom-black to-custom-purple opacity-80"></div>
        
        <div className="flex flex-col w-[852px] items-start gap-[60px] relative">
          <div className="flex flex-col w-[692px] items-start gap-[28px] relative flex-[0_0_auto]">
            <p className="relative self-stretch h-[78px] mt-[-1.00px] [font-family:'Korolev-Regular',Helvetica] font-normal text-white text-[102px] leading-[normal] whitespace-nowrap">
              <span className="tracking-[-10.20px]">D</span>
              <span className="tracking-[-7.14px]">I</span>
              <span className="tracking-[-10.20px]">A</span>
              <span className="tracking-[-9.18px]">S</span>
              <span className="tracking-[-8.16px]">P</span>
              <span className="tracking-[-10.20px]">O</span>
              <span className="tracking-[-7.14px]">R</span>
              <span className="tracking-[-10.20px]">A</span>
              <span className="tracking-[0]">&nbsp;</span>
              <span className="tracking-[-1.02px]">L</span>
              <span className="tracking-[-6.12px]">AB</span>
              <span className="tracking-[-10.20px]">S</span>
            </p>
            <p className="relative self-stretch [font-family:'Korolev-Light',Helvetica] font-light text-white text-[22px] tracking-[0] leading-[33px]">
              Diaspora is a DAO and Research Lab leveraging AI, Web 3, and Mixed Reality technology for the betterment of
              underrepresented communities in both the physical and digital worlds.
            </p>
          </div>
          <div className="flex flex-col w-[852px] items-start gap-[26px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Korolev-Light',Helvetica] font-light text-white text-[22px] tracking-[0] leading-[33px] whitespace-nowrap">
              Specializing in:
            </div>
            <div className="flex flex-wrap w-[852px] items-start gap-[20px_20px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-solid border-[#7233ff] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Korolev-Light',Helvetica] font-light text-white text-[18px] tracking-[0.72px] leading-[27px] whitespace-nowrap">
                  Blockchain
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-solid border-[#7233ff] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Korolev-Light',Helvetica] font-light text-white text-[18px] tracking-[0.72px] leading-[27px] whitespace-nowrap">
                  Distributed Ledger Technology
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-solid border-[#7233ff] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Korolev-Light',Helvetica] font-light text-white text-[18px] tracking-[0.72px] leading-[27px] whitespace-nowrap">
                  Software Development
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-solid border-[#7233ff] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Korolev-Light',Helvetica] font-light text-white text-[18px] tracking-[0.72px] leading-[27px] whitespace-nowrap">
                  Smart Contracts
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-solid border-[#7233ff] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Korolev-Light',Helvetica] font-light text-white text-[18px] tracking-[0.72px] leading-[27px] whitespace-nowrap">
                  Mixed Reality
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-solid border-[#7233ff] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Korolev-Light',Helvetica] font-light text-white text-[18px] tracking-[0.72px] leading-[27px] whitespace-nowrap">
                  DEFI
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[12px] border border-solid border-[#7233ff] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Korolev-Light',Helvetica] font-light text-white text-[18px] tracking-[0.72px] leading-[27px] whitespace-nowrap">
                  DAO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="opacity-80 w-[1579.51px] h-[985px] relative home-bg-labs">
        <div className="w-[1579.51px] h-[985px] left-0 top-0 absolute mix-blend-difference bg-zinc-800"></div>
        <div className="w-[1579.51px] h-[985px] left-0 top-0 absolute mix-blend-overlay bg-violet-600"></div>
    </div> */}
        {/* <section
          className={
            "h-screen w-full flex justify-center items-center relative max-lg:h-auto max-lg:relative max-lg:mt-[5vh] max-smm:mt-[5vh]"
          }
        >
          
        </section> */}
        {/* <span
          ref={secondPage}
          className="hidden align-center flex cursor-pointer justify-center pb-10 max-md:hidden"
          onClick={scrollToSecondPage}
        >
          <ScrollDownIcon />
        </span> */}
      

      {/* <HomeFooter /> */}
    </Layout>
  );
};

export default Home;


