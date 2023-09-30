import AnimatedH1 from "../components/AnimatedH1";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";


export default function Home() {

  const router = useRouter();

  const ref = useRef(null);
  const ref2 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInViewServices = useInView(ref2, { once: true });

  const mainControls = useAnimation();
  const servicesControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    console.log(isInViewServices)
    if (isInViewServices) {
      servicesControls.start("visible");
    }
  }, [isInViewServices]);

  return (
    <div className="">

      <div className="relative flex justify-start sm:justify-center gap-y-0 sm:gap-y-24 flex-col items-center h-max sm:h-screen w-full">
        <div className="flex flex-col justify-center items-center mt-14 sm:mt-0 relative">
          <p className="text-[#878c8e] unbounded font-light mb-3 sm:md-4 text-sm sm:text-[16px] text-center">DIGITAL MARKETING AGENCY</p>

          <div>
            <AnimatedH1 />
          </div>
        </div>


        <div className="w-max relative mb-0 mt-16 sm:mt-0 sm:mb-14 flex-row sm:flex-row flex gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-0 justify-between items-center">
          <div className=" h-max w-max flex flex-col gap-y-8 justify-center items-center">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.5 }} className="origin-bottom"><div className="w-14 h-14 relative bg-[#17191b] flex justify-center items-center">
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.9 }} className="origin-center w-14 h-4 bg-[#878c8e] absolute"><div className="w-14 h-4 bg-[#878c8e] absolute"></div></motion.div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} className="origin-center"><div className="w-8 h-8 bg-[#f1f2ee]"></div></motion.div>
            </div></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} ><h3 className="text-md sm:text-lg text-center unbounded font-light uppercase">Social Media <br /> Marketing</h3></motion.div>
          </div>

          <div className="h-full w-[1px] bg-[#878c8e47]  flex"></div>

          <div className="h-max w-max flex flex-col gap-y-8 justify-center items-center">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.2 }} className="origin-top w-14 h-14 bg-[#17191b] flex justify-center items-center"><div className="w-14 h-14 bg-[#17191b] flex justify-center items-center">
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.6 }} className="origin-bottom w-8 h-full bg-[#878c8e]"><div className="w-8 h-full bg-[#878c8e]"></div></motion.div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} className="origin-center w-8 h-8 bg-[#f1f2ee] absolute flex justify-center items-center"><div className="w-8 h-8 bg-[#f1f2ee] absolute flex justify-center items-center">
                <div className="w-4 h-4 bg-[#17191b]"></div>
              </div></motion.div>
            </div></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} ><h3 className="text-md sm:text-lg text-center unbounded text-[#17191b] font-light uppercase">Website <br /> Developement</h3></motion.div>
          </div>
        </div>
      </div>

      <div className="p-8 sm:p-12 w-screen h-full flex ">
        <div className="mt-16 flex justify-center items-center w-full h-[30vh] sm:h-[100vh] bg-[#17191b]">
          <Image
            src="/White.png"
            width={80}
            height={80}
            alt=''
            priority={true}
          />
        </div>
      </div>

      <div ref={ref} className="h-max sm:h-screen relative w-screen p-8 sm:p-12 pb-16 sm:pb-12 sm:pr-16 flex flex-col justify-start">
        <div className="w-full justify-between gap-y-8 sm:gap-y-0 flex flex-col-reverse sm:flex-row  items-end sm:items-center">
          <motion.div variants={{ hidden: { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0 } }} transition={{ delay: 0.4 }} initial="hidden" animate={mainControls}><h1 className="unbounded text-[38px] font-light text-right sm:text-left">GET TO <br />KNOW US BETTER</h1></motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ delay: 0.6 }} initial="hidden" animate={mainControls}><div onClick={() => router.push('/about')} className="flex aboutLink cursor-pointer relative items-center gap-x-4">
            <h2 className="unbounded text-xl text-[#17191b] font-light relative">ABOUT</h2>
            <div className=" transition-all flex justify-end w-14 h-14 relative">
              <div className=" transition-all blackcube w-[50%] h-full bg-[#17191b]"></div>
              <div className=" transition-all graycube w-8 h-8 bg-[#878c8e] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "></div>
            </div>
          </div></motion.div>
        </div>

        <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} transition={{ delay: 0.75 }} initial="hidden" animate={mainControls}><p className=" mt-10 unbounded text-[16px] text-[#878c8e]">Driving digital success through expert marketing strategies and <br /> data-driven solutions.</p></motion.div>


        <div className="mt-24 sm:flex flex-col hidden sm:flex-row items-center justify-center gap-x-0 sm:gap-x-28">
          <div className="flex relative justify-center items-center w-36 h-36 sm:w-64 sm:h-64">
            <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} transition={{ delay: 0.8 }} className=" origin-top w-full h-[20%] top-0 absolute bg-[#17191b]" initial="hidden" animate={mainControls}><div className=" origin-top w-full h-[20%] top-0 absolute bg-[#17191b]"></div></motion.div>
            <motion.div variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ delay: 1 }} initial="hidden" className="w-20 sm:w-48 h-20 sm:h-48 z-10 flex justify-center items-center bg-[#878c8e]" animate={mainControls}><div className="w-48 h-48 z-10 flex justify-center items-center bg-[#878c8e]">
              <motion.div variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ delay: 1.2 }} initial="hidden" className=" w-10 sm:w-36 h-10 sm:h-36 bg-[#17191b] flex items-center justify-center" animate={mainControls}><div className=" w-36 h-36 bg-[#17191b] flex items-center justify-center">
                <motion.div variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }} transition={{ delay: 1.4 }} initial="hidden" className="w-6 sm:w-20 h-6 sm:h-20 bg-[#f1f2ee]" animate={mainControls}><div className="w-20 h-20 bg-[#f1f2ee]"></div></motion.div>
              </div></motion.div>
            </div></motion.div>
            <motion.div variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }} transition={{ delay: 0.8 }} initial="hidden" className="origin-bottom w-full h-[20%] bottom-0 absolute bg-[#17191b]" animate={mainControls}><div className="origin-bottom w-full h-[20%] bottom-0 absolute bg-[#17191b]"></div></motion.div>
          </div>

          <div className="flex flex-col gap-y-5">
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} transition={{ delay: 1.5 }} initial="hidden" animate={mainControls}><p className="unbounded font-light text-md sm:text-lg text-[#17191b]">Welcome to VivaVersa, where our passionate <br /> team of digital experts drives business <br /> success in the dynamic online world.</p></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} transition={{ delay: 0.65 }} initial="hidden" animate={mainControls}><button className="unbounded px-10 py-3 bg-[#17191b] w-max text-[#f1f2ee] rounded-sm font-light">ABOUT</button></motion.div>
          </div>
        </div>
      </div>

      <div className="z-10 w-screen relative h-full gap-y-16 sm:gap-y-20 flex flex-col bg-[#17191b] p-8 py-16 sm:py-12 sm:p-12 sm:pb-44  sm:pr-16">

        <div className="flex flex-col">
          <div className="w-full justify-between gap-y-8 sm:gap-y-0 flex flex-col-reverse sm:flex-row  items-end sm:items-center">

            <motion.div variants={{ hidden: { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0 } }} transition={{ delay: 0.4 }} initial="hidden" animate={servicesControls}><div>
              <h1 className="unbounded text-[38px] font-light text-[#f1f2ee] text-right sm:text-left">SERVICES <br /> WHAT WE’RE GOOD AT</h1>
            </div></motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ delay: 0.6 }} initial="hidden" animate={servicesControls}><div onClick={() => router.push('/services')} className="flex servicesLink cursor-pointer relative items-center gap-x-4">
              <h2 className="unbounded text-xl text-[#f1f2ee] font-light relative">SERVICES</h2>
              <div className=" transition-all flex justify-end w-14 h-14 relative">
                <div className=" transition-all whiteCube w-[50%] h-full bg-[#f1f2ee]"></div>
                <div className=" transition-all graycube w-8 h-8 bg-[#878c8e] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "></div>
              </div>
            </div></motion.div>
          </div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ delay: 0.75 }} initial="hidden" animate={servicesControls}><p className=" mt-10 unbounded text-[16px] text-[#878c8e]">We provide tailored services for businesses to succeed in the digital landscape.</p></motion.div>

        </div>

        <div ref={ref2}>
          <motion.div variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }} transition={{ delay: 0.7 }} initial="hidden" animate={servicesControls}> <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] unbounded font-light hover:font-medium transition-all duration-300 gap-x-4 flex items-center"><span className="text-[#878c8e]">01</span> SOCIAL MEDIA MARKETING</h1>
          </div></motion.div>

          <motion.div variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }} transition={{ delay: 0.8 }} initial="hidden" animate={servicesControls}> <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] unbounded font-light hover:font-medium transition-all duration-300 gap-x-4 flex items-center"><span className="text-[#878c8e]">02</span> WEB DESIGN</h1>
          </div></motion.div>

          <motion.div variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }} transition={{ delay: 0.9 }} initial="hidden" animate={servicesControls}> <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] unbounded font-light hover:font-medium transition-all duration-300 gap-x-4 flex items-center"><span className="text-[#878c8e]">03</span> WEB DEVELOPMENT</h1>
          </div></motion.div>
        </div>
      </div>

      <div className="h-screen w-screen bg-[#f1f2ee]">

      </div>

    </div>
  )
}
