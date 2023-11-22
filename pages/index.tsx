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
        
        <div className="h-[462px] left-[258px] top-[203px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
            <div className="h-[205px] flex-col justify-start items-start gap-7 flex">
                <div className="self-stretch h-[78px]"><span className="text-white text-[102px] font-black font-['Korolev']">D</span><span className="text-white text-[102px] font-black font-['Korolev']">I</span><span className="text-white text-[102px] font-black font-['Korolev']">A</span><span className="text-white text-[102px] font-black font-['Korolev']">S</span><span className="text-white text-[102px] font-black font-['Korolev']">P</span><span className="text-white text-[102px] font-black font-['Korolev']">O</span><span className="text-white text-[102px] font-black font-['Korolev']">R</span><span className="text-white text-[102px] font-black font-['Korolev']">A</span><span className="text-white text-[102px] font-black font-['Korolev']"> </span><span className="text-white text-[102px] font-black font-['Korolev']">L</span><span className="text-white text-[102px] font-black font-['Korolev']">AB</span><span className="text-white text-[102px] font-black font-['Korolev']">S</span></div>
                <div className="self-stretch text-white text-[22px] font-light font-['Korolev'] leading-[33px]">Diaspora is a DAO and Research Lab leveraging AI, Web 3, and Mixed Reality technology for the betterment of underrepresented communities in both the physical and digital worlds.</div>
            </div>
            <div className="h-[197px] flex-col justify-start items-start gap-[26px] flex">
                <div className="text-white text-[22px] font-light font-['Korolev'] leading-[33px]">Specializing in:</div>
                <div className="w-[852px] justify-start items-start gap-5 inline-flex">
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">Blockchain</div>
                    </div>
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">Smart Contracts</div>
                    </div>
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">Distributed Ledger Technology</div>
                    </div>
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">VR</div>
                    </div>
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">Mixed Reality</div>
                    </div>
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">DEFI</div>
                    </div>
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">Software Development</div>
                    </div>
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">DAO</div>
                    </div>
                    <div className="px-6 py-4 rounded-xl border border-violet-600 justify-center items-center gap-2.5 flex">
                        <div className="text-white text-lg font-light font-['Korolev'] leading-[27px] tracking-wide">AR</div>
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


