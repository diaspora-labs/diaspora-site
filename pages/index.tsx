import React, { useState, useRef } from "react";
import { NextPage } from "next";

import { HomeFooter } from "../components/Home/HomeFooter";
import { Discord } from "../components/Icons/Discord";
import { Envelop } from "../components/Icons/Envelop";
import { Instagram } from "../components/Icons/Instagram";
import { Twitter } from "../components/Icons/Twitter";
import { ScrollDownIcon } from "../components/Icons/ScrollDownIcon";

import { Layout } from "../components/Layout";

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
      <section
        className={
          "bg-black h-screen w-full flex justify-center items-center relative max-lg:h-auto max-lg:relative max-lg:mt-[5vh] max-smm:mt-[5vh]"
        }
      >
        
      </section>
      {/* <span
        ref={secondPage}
        className="hidden align-center flex cursor-pointer justify-center pb-10 max-md:hidden"
        onClick={scrollToSecondPage}
      >
        <ScrollDownIcon />
      </span> */}

      <HomeFooter />
    </Layout>
  );
};

export default Home;


