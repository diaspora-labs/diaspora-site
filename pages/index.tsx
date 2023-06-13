import React, { useState, useRef } from "react";
import { NextPage } from "next";

import { HomeFooter } from "../components/Home/HomeFooter";
import { Discord } from "../components/Icons/Discord";
import { Envelop } from "../components/Icons/Envelop";
import { Instagram } from "../components/Icons/Instagram";
import { Twitter } from "../components/Icons/Twitter";
import { ScrollDownIcon } from "../components/Icons/ScrollDownIcon";

import { Layout } from "../components/Layout";
import { Visual } from "../components/HomeVisual";

import { PeopleSection } from "../components/Home/PeopleSection";
import { GoldMaskThree } from "../components/GoldMask/GoldMaskThree";
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
          "bg-black h-screen w-full flex justify-center items-center relative max-lg:h-auto max-lg:relative max-lg:mt-[30vh] max-smm:mt-[25vh]"
        }
      >
        <div
          className={
            "w-full h-full flex justify-between items-center max-lg:flex-col "
          }
        >
          <div
            className={
              "w-4/5 h-full flex flex-col justify-center items-start mt-[-5%] ml-[15%] max-md:ml-0 max-2xl:ml-[5%]"
            }
          >
            <h3
              className={
                "font-medium text-3xl text-[#F05E17] mb-6 max-smm:text-2xl"
              }
            >
              #TakeTheJourney
            </h3>
            <h1
              className={
                "w-[100%] font-thin text-7xl text-gray-200 leading-[135%] max-smm:text-4xl max-smm:leading-[145%] max-md:text-6xl max-md:leading-[135%] max-xl:text-5xl"
              }
            >
              Building a bridge <br />
              <span className={styles.changetext}></span>
            </h1>
            <div
              className={
                "flex justify-center items-center mt-14 gap-8 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mt-10"
              }
            >
              <a
                className={
                  "font-light text-[18px] text-gray-200 bg-[#7233FF] rounded pt-3.5 pb-3.5 pl-4 pr-4 no-underline max-md:text-[14px] max-md:pt-3 max-md:pb-3"
                }
                href="/mint"
              >
                MASK PASSES
              </a>
              <p
                className={
                  "font-thin text-l tracking-[1.5px] text-gray-300 no-underline max-smm:text-sm"
                }
              >
                Learn more about DIASPORA DAO
              </p>
            </div>
          </div>
          <div className={"flex justify-center items-center"}>
            <img className={styles.changeimage} src="" alt="" />
          </div>
        </div>
      </section>
      <span
        ref={secondPage}
        className="align-center flex cursor-pointer justify-center pb-10"
        onClick={scrollToSecondPage}
      >
        <ScrollDownIcon />
      </span>

      <section
        className={
          "pointer-events-auto z-10 flex h-full flex-col border-t-[1px] border-neutral-800"
        }
      >
        <div className="my-auto mt-10 flex grow flex-col p-10">
          <div className="mx-auto w-full">
            <Visual />
          </div>

          <div className={"container mx-auto mt-10 max-w-3xl"}>
            <p className="text-center text-lg font-normal tracking-wide text-gray-400">
              4,444 Ancestors to guide you on your Journey into Web3. Connecting
              the Diaspora on the Solana Blockchain with History, Lineage,
              Up-skilling & Digital Art. With a goal to inspire ‘Decentralized
              Powernomics’ across the culture, summon your Sol & Mint an
              Ancestor. Your key-to-access, collectible & guide.
              {/* Diaspora is a community centric DAO powered by the Solana blockchain. The company’s mission is to empower
              economic opportunity, education, and equality. Projects under Diaspora will be funded initially by the
              launch of a unique NFT collection that showcases historic people, moments, and iconography of the
              diaspora. It will serve as a digital historical treasure, reimagined through a futuristic lens. */}
            </p>
          </div>
        </div>
      </section>
      {/* <section
        className={"bg-black h-screen w-full flex justify-center items-center"}
      >
        <div className={"flex flex-col items-center justify-center"}>
          <div className={"flex items-center justify-center mb-16"}>
            <h1
              className={
                "font-normal text-3xl text-gray-200 leading-[135%] tracking-[2px]"
              }
            >
              Traits
            </h1>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center w-screen mt-0 gap-[100px]"
            }
          >
            <div className={"flex justify-center items-center gap-[38vw]"}>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-end justify-end font-light text-s text-gray-400 leading-[135%]"}>
                  Background(s)
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                  
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-start justify-start font-light text-s text-gray-400 leading-[135%]"}>
                  Gender
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                  
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[45vw]"}>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-end justify-end text-right font-light text-s text-gray-400 leading-[135%]"}>
                  Artifact(s)
                </p>
                <p className={"font-light text-s text-gray-500 leading-[134%]"}>
                  
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"text-center flex flex-col items-start justify-start font-light text-s text-gray-400 leading-[135%]"}>
                  Cybernetic <br /> Augmentations
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[48vw]"}>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-end justify-end text-right font-light text-s text-gray-400 leading-[135%]"}>
                  Metals & Alloys
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>

                </p>
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-start justify-start font-light text-s text-gray-400 leading-[135%]"}>
                  Companion
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
          
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[45vw]"}>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-end justify-end font-light text-s text-gray-400 leading-[135%]"}>
                  Masks
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                 
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-start justify-start font-light text-s text-gray-400 leading-[135%]"}>
                  Phenotype
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                  
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[40vw]"}>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-end justify-end font-light text-s text-gray-400 leading-[135%]"}>
                  Animation
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-start justify-start font-light text-s text-gray-400 leading-[135%]"}>
                  Artist Collab
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                 
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[30vw]"}>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"text-center flex flex-col items-end justify-end font-light text-s text-gray-400 leading-[135%]"}>
                  Clothing <br /> (Status, region, era)
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"flex flex-col items-start justify-start font-light text-s text-gray-400 leading-[135%]"}>
                  Pose
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={"absolute flex justify-center items-center w-full h-full"}
        >
          <GoldMaskThree />
        </div>
      </section> */}

      <PeopleSection showModal={showModal} setShowModal={setShowModal} />

      <HomeFooter />
    </Layout>
  );
};

export default Home;
