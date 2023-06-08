import React, {useRef, useEffect, useLayoutEffect} from 'react'
import { Layout } from "../components/Layout"
import { HomeFooter } from '../components/Home/HomeFooter'
import {gsap, Power3} from 'gsap'



const about = () => {
    let neff = useRef(null)
    let africa = useRef(null)
    let mbambi = useRef(null)
    let cote = useRef(null)
    let infra = useRef(null)
    let walet = useRef(null)
    let diaspora = useRef(null)
    let dao = useRef(null)
    let dotcote = useRef(null)
    let dotmbambi = useRef(null)
    let dotwalet = useRef(null)
    let dotinfra = useRef(null)
    let tl = gsap.timeline()
    useLayoutEffect(() => {
        tl.fromTo(neff, {duration: 1, opacity: 0}, {duration: 1, opacity: 1, immediateRender: false})
        .fromTo(dao, {duration: 1, opacity: 0, "margin-left":"15%" }, {duration: 1, opacity: 1, "margin-left":"11.5%", delay: 0.5, immediateRender: false})
        .fromTo(diaspora, {duration: 1, opacity: 0, "margin-left":"-20%" }, {duration: 1, opacity: 1, "margin-left":"-13%", immediateRender: false} , "<")
        .fromTo(africa, {duration: 1, opacity: 0}, {duration: 1, opacity: 1, immediateRender: false})

        .fromTo(dotmbambi, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"-23.8%", "margin-top":"-6%", delay: 0.5, immediateRender: false})
        .fromTo(dotcote, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"16.2%", "margin-top":"15.7%", immediateRender: false}, "<"	)
        .fromTo(dotinfra, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"12.2%", "margin-top":"-10.8%", immediateRender: false}, "<")
        .fromTo(dotwalet, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"-14.5%", "margin-top":"9.5%", immediateRender: false}, "<")
        
        .fromTo(mbambi, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"-27%", "margin-top":"-6%", delay: 0.5, immediateRender: false})
        .fromTo(cote, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"20", "margin-top":"17%", immediateRender: false}, "<"	)
        .fromTo(infra, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"-19%", "margin-top":"10%", immediateRender: false}, "<")
        .fromTo(walet, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"17%", "margin-top":"-10%", immediateRender: false}, "<")

        return () => {
            tl.kill();
        };
    })

    // for smaller devices
    if (typeof window !== "undefined") {
        // browser code
        let tl2 = gsap.timeline()
        if(window.innerWidth < 640){
            useLayoutEffect(() => {
                tl2.fromTo(neff, {duration: 1, opacity: 0}, {duration: 1, opacity: 1, immediateRender: false})
                .fromTo(dao, {duration: 1, opacity: 0, "margin-left":"20%" }, {duration: 1, opacity: 1, "margin-left":"14.5%", delay: 0.5, immediateRender: false})
                .fromTo(diaspora, {duration: 1, opacity: 0, "margin-left":"-25%" }, {duration: 1, opacity: 1, "margin-left":"-17%", immediateRender: false} , "<")
                .fromTo(africa, {duration: 1, opacity: 0}, {duration: 1, opacity: 1, immediateRender: false})
        
                .fromTo(dotmbambi, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"-35.7%", "margin-top":"-9%", delay: 0.5, immediateRender: false})
                .fromTo(dotcote, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"24.3%", "margin-top":"23.55%", immediateRender: false}, "<"	)
                .fromTo(dotinfra, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"18.3%", "margin-top":"-16.2%", immediateRender: false}, "<")
                .fromTo(dotwalet, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"-21.75%", "margin-top":"14.25%", immediateRender: false}, "<")
                
                .fromTo(mbambi, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"-40.5%", "margin-top":"-9%", delay: 0.5, immediateRender: false})
                .fromTo(cote, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"30", "margin-top":"25.5%", immediateRender: false}, "<"	)
                .fromTo(infra, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"-28.5%", "margin-top":"15%", immediateRender: false}, "<")
                .fromTo(walet, {duration: 1, opacity: 0, "margin-left":"0%", "margin-top":"0%"}, {duration: 1, opacity: 1, "margin-left":"25.5%", "margin-top":"-15%", immediateRender: false}, "<")
        
                return () => {
                    tl2.kill();
                };
            })
        }
      }
    
            
            

    // fix strict mode rerender issue	



   
 


  return (
    <Layout>
        <section className="relative h-screen flex flex-col justify-center items-center max-2xl:h-[90vh] max-xl:h-[75vh] max-lg:h-[50vh] max-md:h-[40vh] max-sm:h-[35vh] max-smm-[18vh]">
            <div className="flex justify-center items-center w-full h-auto relative">
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 mt-[5%] w-[48%] opacity-0 max-sm:w-[72%]" src="images/about/Vector.png" alt="" ref = {el => africa = el} />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[28%] opacity-0 max-sm:w-[42%]" src="images/about/neef.png" alt="" ref = {el => neff = el}/>
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[23%] ml-[11.5%] mt-[5%] opacity-0 max-sm:w-[34.5%]" src="images/about/dao.svg" alt="" ref = {el => dao = el}/>
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[6%] mt-[-5%] ml-[-13%] opacity-0 max-sm:w-[9%]" src="images/about/diaspora.svg" alt="" ref = {el => diaspora = el}/>
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[4.5%] ml-[20%] mt-[17%] opacity-0 max-sm:w-[6.75%]" src="images/about/cote.svg" alt="" ref = {el => cote = el}/>
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[4%] mt-[-6%] ml-[-27%] opacity-0 max-sm:w-[6%]" src="images/about/mbambi.svg" alt="" ref = {el => mbambi = el}/>
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[4%] mt-[-10%] ml-[17%] opacity-0 max-sm:w-[6%]" src="images/about/wallet.svg" alt="" ref = {el => walet = el} />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[5.2%] ml-[-19%] mt-[10%] opacity-0 max-sm:w-[7.8%]" src="images/about/infrastructure.svg" alt=""  ref = {el => infra = el}/>
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[1%] mt-[-6%] ml-[-23.8%] opacity-0 max-sm:w-[1.5%]" src="images/about/dot.svg" alt="" ref = {el => dotmbambi = el}/>
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[1%] ml-[16.2%] mt-[15.7%] opacity-0 max-sm:w-[1.5%]" src="images/about/dot.svg" alt="" ref = {el => dotcote = el}/>
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[1%] mt-[-10.8%] ml-[12.2%] opacity-0 max-sm:w-[1.5%]" src="images/about/dot.svg" alt="" ref = {el => dotwalet = el} />
                <img className="absolute h-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[1%] ml-[-14.5%] mt-[9.5%] opacity-0 max-sm:w-[1.5%]" src="images/about/dot.svg" alt="" ref = {el => dotinfra = el} />
            </div>
    </section>
    <section className="relative w-full h-auto text-[white] flex flex-col justify-center items-center mt-[-9vw] pb-[5%] px-[25%] py-0 max-md:px-[15%] max-sm:px-[10%]">
        <div className="w-full text-[aliceblue]">
            <h1 className='not-italic font-light text-[50px] leading-[120%] text-[#CCCCCC] w-4/5 tracking-[1px] mb-5 max-xl:w-full max-xl:text-[40px] max-lg:text-[35px] max-md:text-[30px] max-sm:text-[25px] max-smm:text-[20px]'>Real World $ Metaverse Experience</h1>
            <p className='not-italic font-normal text-base leading-[160%] w-[70%] tracking-[0.01em] text-[#9A9A9A] max-xl:w-full max-xl:text-[17px] max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-smm:text-[13px]'>Diaspora’s community will encourage experiences in a varied way to support the global
                community. As part of the Web3 movement, we will provide unique metaverse experiences that
                align with our pillars and allow for simultaneous global participation. As a companion, we will
                provide opportunities for the community to meet up for quality in-person events. As a grassroots
                community, the quality of experiences, location, and objectives will be paramount to success.
                Each event will serve a purpose to the growth of the DAO and or upskilling.</p>
        </div>
        <div className="flex items-center justify-center gap-5 mt-[10%] max-xl:flex-col">
            <div className='flex flex-col items-start justify-start gap-5'>
                <img className='mb-[5px]' src="images/about/icon1.svg" alt=""/>
                <h2 className='not-italic font-normal text-xl leading-[120%] text-[#FF7A00] uppercase;'>Upskilling & Masterclass</h2>
                <p className='not-italic font-normal text-base leading-[160%] text-[#9A9A9A] w-[90%] max-xl:text-[17px] max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-smm:text-[13px]'>
                    Diaspora will provide a whiteglove onboarding experience for community members at all levels of proficiency. Part of our goal is to build a community for all, demystifying the DAO experience. This will include providing education through various masterclasses on Web3, creating an opportunity for members to further contribute.
                </p>
            </div>
            <div className='flex flex-col items-start justify-start gap-5'>
                <img className='mb-[5px]' src="images/about/icon2.svg" alt=""/>
                <h2 className='not-italic font-normal text-xl leading-[120%] text-[#FF7A00] uppercase;'>Upskilling & Masterclass</h2>
                <p className='not-italic font-normal text-base leading-[160%] text-[#9A9A9A] w-[90%] max-xl:text-[17px] max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-smm:text-[13px]'>
                    Part of Diaspora’s community building is by investing in the community. The DAO’s incubator will give support to help develop, launch, and grow projects across different stages. The Dispaora’s DAO will play an investor role long term by providing funds and mentorship to projects.
                </p>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[18px] w-full mt-[10%]">
            <h1 className='Korolev not-italic font-normal text-xl leading-[120%] text-[#FF7A00] uppercase mb-[1%]'>Diaspora will support projects in 4 key pillars</h1>
            <div className="flex flex-col items-start justify-start gap-[30px] w-full">
                <div className='flex flex-row items-start justify-start gap-[30px] max-sm:flex-col'>
                    <span className='not-italic font-normal text-base leading-[160%] text-neutral-50 border px-[30px] py-5 rounded-[10px] border-solid border-[#b1b1b14d]  max-sm:w-full'>ECONOMIC DEVELOPMENT</span>
                    <span className='not-italic font-normal text-base leading-[160%] text-neutral-50 border px-[30px] py-5 rounded-[10px] border-solid border-[#b1b1b14d]  max-sm:w-full'>SOCIAL/SOCIETAL GOOD</span>
                </div>
                <div className='flex flex-row items-start justify-start gap-[30px]  max-sm:flex-col'>
                    <span className='not-italic font-normal text-base leading-[160%] text-neutral-50 border px-[30px] py-5 rounded-[10px] border-solid border-[#b1b1b14d]  max-sm:w-full'>INFRASTRUCTURE</span>
                    <span className='not-italic font-normal text-base leading-[160%] text-neutral-50 border px-[30px] py-5 rounded-[10px] border-solid border-[#b1b1b14d]  max-sm:w-full'>ARTS/HISTORY/CULTURE</span>
                </div>
            </div>
        </div>
    </section>
    <HomeFooter />
    </Layout>
  )
}

export default about