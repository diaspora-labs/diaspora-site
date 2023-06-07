import React from 'react'
import { Layout } from "../components/Layout"


const about = () => {
  return (
    <Layout>
        <section className="relative h-screen flex flex-col justify-center items-center">
            <div className="flex justify-center items-center w-full h-auto relative">
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 mt-[5%] w-[48%]" src="images/about/Vector.png" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[28%]" src="images/about/neef.png" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[23%] ml-[11.5%] mt-[5%]" src="images/about/dao.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[6%] mt-[-5%] ml-[-13%]" src="images/about/diaspora.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[4.5%] ml-[20%] mt-[17%]" src="images/about/cote.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[4%] mt-[-6%] ml-[-27%]" src="images/about/mbambi.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[4%] mt-[-10%] ml-[17%]" src="images/about/wallet.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[5.2%] ml-[-19%] mt-[10%]" src="images/about/infrastructure.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[1%] mt-[-6%] ml-[-23.8%]" src="images/about/dot.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[1%] ml-[16.2%] mt-[15.7%]" src="images/about/dot.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[1%] mt-[-10.8%] ml-[12.2%]" src="images/about/dot.svg" alt="" />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[1%] ml-[-14.5%] mt-[9.5%]" src="images/about/dot.svg" alt="" />
            </div>
    </section>
    <section className="relative w-full h-auto text-[white] flex flex-col justify-center items-center mt-[-9vw] pb-[5%] px-[25%] py-0">
        <div className="w-full text-[aliceblue]">
            <h1 className='not-italic font-light text-[50px] leading-[120%] text-[#CCCCCC] w-4/5 tracking-[1px] mb-5'>Real World $ Metaverse Experience</h1>
            <p className='not-italic font-normal text-base leading-[160%] w-[70%] tracking-[0.01em] text-[#9A9A9A]'>Diaspora’s community will encourage experiences in a varied way to support the global
                community. As part of the Web3 movement, we will provide unique metaverse experiences that
                align with our pillars and allow for simultaneous global participation. As a companion, we will
                provide opportunities for the community to meet up for quality in-person events. As a grassroots
                community, the quality of experiences, location, and objectives will be paramount to success.
                Each event will serve a purpose to the growth of the DAO and or upskilling.</p>
        </div>
        <div className="flex items-center justify-center gap-5 mt-[10%]">
            <div className='flex flex-col items-start justify-start gap-5'>
                <img className='mb-[5px]' src="images/about/icon1.svg" alt=""/>
                <h2 className='not-italic font-normal text-xl leading-[120%] text-[#FF7A00] uppercase;'>Upskilling & Masterclass</h2>
                <p className='not-italic font-normal text-base leading-[160%] text-[#9A9A9A] w-[90%]'>
                    Diaspora will provide a whiteglove onboarding experience for community members at all levels of proficiency. Part of our goal is to build a community for all, demystifying the DAO experience. This will include providing education through various masterclasses on Web3, creating an opportunity for members to further contribute.
                </p>
            </div>
            <div className='flex flex-col items-start justify-start gap-5'>
                <img className='mb-[5px]' src="images/about/icon2.svg" alt=""/>
                <h2 className='not-italic font-normal text-xl leading-[120%] text-[#FF7A00] uppercase;'>Upskilling & Masterclass</h2>
                <p className='not-italic font-normal text-base leading-[160%] text-[#9A9A9A] w-[90%]'>
                    Part of Diaspora’s community building is by investing in the community. The DAO’s incubator will give support to help develop, launch, and grow projects across different stages. The Dispaora’s DAO will play an investor role long term by providing funds and mentorship to projects.
                </p>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[18px] w-full mt-[10%]">
            <h1 className='Korolev not-italic font-normal text-xl leading-[120%] text-[#FF7A00] uppercase mb-[1%]'>Diaspora will support projects in 4 key pillars</h1>
            <div className="flex flex-col items-start justify-start gap-[30px] w-full">
                <div className='flex flex-row items-start justify-start gap-[30px]'>
                    <span className='not-italic font-normal text-base leading-[160%] text-neutral-50 border px-[30px] py-5 rounded-[10px] border-solid border-[#b1b1b14d]'>ECONOMIC DEVELOPMENT</span>
                    <span className='not-italic font-normal text-base leading-[160%] text-neutral-50 border px-[30px] py-5 rounded-[10px] border-solid border-[#b1b1b14d]'>SOCIAL/SOCIETAL GOOD</span>
                </div>
                <div className='flex flex-row items-start justify-start gap-[30px]'>
                    <span className='not-italic font-normal text-base leading-[160%] text-neutral-50 border px-[30px] py-5 rounded-[10px] border-solid border-[#b1b1b14d]'>INFRASTRUCTURE</span>
                    <span className='not-italic font-normal text-base leading-[160%] text-neutral-50 border px-[30px] py-5 rounded-[10px] border-solid border-[#b1b1b14d]'>ARTS/HISTORY/CULTURE</span>
                </div>
            </div>
        </div>
    </section>
    </Layout>
  )
}

export default about