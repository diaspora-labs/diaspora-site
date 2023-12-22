import React from "react";
import styles from "./animation.module.css";

export const BuildingBridgeSection: React.FC = () => {
    return (
        <section
            className={
            "bg-black h-screen w-full flex justify-center items-center relative max-lg:h-auto max-lg:relative max-lg:mt-[5vh] max-smm:mt-[5vh]"
            }
        >
            <div
            className={
                "w-full h-full flex justify-between items-center max-lg:flex-col "
            }
            >
            <div
                className={
                "w-4/5 h-full flex flex-col justify-center items-start mt-[-5%] ml-[15%] max-md:ml-[40px] max-md:w-full  max-2xl:ml-[5%] max-md:mt-[5%] max-sm:mt-[5%] max-xl:mt-[5vh]"
                }
            >
                <h3
                className={
                    "font-medium text-3xl text-[#F05E17] mb-3 max-sm:text-xl"
                }
                >
                #TakeTheJourney
                </h3>
                <h1
                className={
                    "w-[100%] font-thin text-7xl text-gray-200 leading-[135%] max-sm:text-4xl max-sm:leading-[140%] max-md:text-6xl max-md:leading-[135%] max-xl:text-5xl max-2xl:text-6xl"
                }
                >
                Building a bridge <br />
                <span className={styles.changetext}></span>
                </h1>
                <div
                className={
                    "flex justify-center items-center mt-14 gap-8 max-md:flex-col max-md:items-start max-md:gap-4 max-md:mt-8"
                }
                >
                <a
                    className={
                    "font-light text-[18px] text-gray-200 bg-[#7233FF] rounded pt-3.5 pb-3.5 pl-4 pr-4 no-underline max-md:text-[14px] max-md:pt-3 max-md:pb-3 "
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
                    Learn more about DIASPORA DAO {">"}
                </p>
                </div>
            </div>
            <div className={"flex justify-center items-center max-md:w-[140%] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(32,0,50,1)_100%)] max-lg:bg-[linear-gradient(0deg,rgba(32,0,50,1)_0%,rgba(0,0,0,1)_100%)]"}>
                <img className={styles.changeimage} src="" alt="" />
            </div>
            </div>
        </section>
    );
};