import React from "react"
import cls from "classnames"
import { GoldMaskThree } from "../GoldMask/GoldMaskThree";

interface TraitSectionProps {
  fixed?: boolean
}

export const TraitSection: React.FC<TraitSectionProps> = () => {
  return (
    <section
        className={"bg-black h-auto pb-[80px] pt-[80px] w-full flex justify-center items-center max-md:h-auto max-md:pt-[20px] max-md:pb-[50px]"}
      >
        <div className={"flex flex-col items-center justify-center h-auto"}>
          <div className={"flex items-center justify-center mb-16 max-md:mb-0"}>
            <h1
              className={
                "text-3xl font-bold tracking-wide text-gray-400 leading-[135%]"
              }
            >
              Traits
            </h1>
          </div>
          <div
          className={"absolute flex justify-center items-center w-full h-full max-md:relative"}
          >
            <GoldMaskThree />
          </div>
          <div
            className={
              "flex flex-col justify-center items-center w-screen h-auto mt-0 gap-[60px] max-md:gap-[50px] max-md:mt-[50px]"
            }
          >
            <div className={"flex justify-center items-center gap-[38vw] max-md:w-full max-md:justify-center max-md:gap-[2vw]"}>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Background(s)
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                  
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Gender
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                  
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[45vw] max-md:w-full max-md:justify-center max-md:gap-[2vw]"}>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  text-right font-light text-s text-gray-400 leading-[135%]"}>
                  Artifact(s)
                </p>
                <p className={"font-light text-s text-gray-500 leading-[134%]"}>
                  
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={" flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Cybernetic <br /> Augmentations
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[48vw] max-md:w-full max-md:justify-center max-md:gap-[2vw]"}>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  text-right font-light text-s text-gray-400 leading-[135%]"}>
                  Metals & Alloys
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>

                </p>
              </div>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Companion
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
          
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[45vw] max-md:w-full max-md:justify-center max-md:gap-[2vw]"}>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Masks
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                 
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Phenotype
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                  
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[40vw] max-md:w-full max-md:justify-center max-md:gap-[2vw]"}>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Animation
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Artist Collab
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                 
                </p>
              </div>
            </div>
            <div className={"flex justify-center items-center gap-[30vw] max-md:w-full max-md:justify-center max-md:gap-[2vw]"}>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"text-center flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Clothing <br /> (Status, region, era)
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                
                </p>
              </div>
              <div className={"flex flex-col items-center justify-center max-md:w-[50%]"}>
                <p className={"flex flex-col  font-light text-s text-gray-400 leading-[135%]"}>
                  Pose
                </p>
                <p className={"font-light text-s text-gray-500 leading-[135%]"}>
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
