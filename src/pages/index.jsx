import AnimatedH1 from "../components/AnimatedHeader";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import MagneticHover from "@/components/MagneticHover";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

  const router = useRouter();

  const [videoPlay, setvideoPlay] = useState(false)
  const [unmuteVideo, setunmuteVideo] = useState(true)

  const videoRef = useRef(null);

  const handleUnumuteVideo = () => {
    const video = videoRef.current;

    if (video) {
      const newMutedState = !video.muted;
      video.muted = newMutedState;
      setunmuteVideo(newMutedState);
    }

  };
  const togglePlayPause = () => {
    const video = videoRef.current;

    videoPlay ? setvideoPlay(false) : setvideoPlay(true)

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

  };



  return (
    <>
      <Header />
      <div className="">

        <div className="relative flex justify-start sm:justify-center gap-y-0 sm:gap-y-24 flex-col items-center h-max sm:h-screen w-full">
          <div className="flex flex-col justify-center items-center mt-14 sm:mt-0 relative">
            <p className="text-[#878c8e]  font-light mb-3 sm:md-4 text-sm sm:text-[16px] text-center">DIGITAL MARKETING AGENCY</p>

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
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} ><h3 className="text-md sm:text-lg text-center  font-light uppercase">Social Media <br /> Marketing</h3></motion.div>
            </div>

            <div className="h-full w-[1px] bg-[#878c8e47]  flex"></div>

            <div className="h-max w-max flex flex-col gap-y-8 justify-center items-center">
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.2 }} className="origin-top w-14 h-14 bg-[#17191b] flex justify-center items-center"><div className="w-14 h-14 bg-[#17191b] flex justify-center items-center">
                <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.6 }} className="origin-bottom w-8 h-full bg-[#878c8e]"><div className="w-8 h-full bg-[#878c8e]"></div></motion.div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} className="origin-center w-8 h-8 bg-[#f1f2ee] absolute flex justify-center items-center"><div className="w-8 h-8 bg-[#f1f2ee] absolute flex justify-center items-center">
                  <div className="w-4 h-4 bg-[#17191b]"></div>
                </div></motion.div>
              </div></motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} ><h3 className="text-md sm:text-lg text-center  text-[#17191b] font-light uppercase">Website <br /> Developement</h3></motion.div>
            </div>
          </div>
        </div>

        <div className="sm:p-12 sm:pt-0 w-screen h-full flex">
          <div className="mt-16 flex justify-center relative items-center w-full h-[30vh] sm:h-[100vh] bg-transparent">

            <video autoPlay ref={videoRef} playsInline loop muted={unmuteVideo} className="absolute left-0 top-0 w-full">
              <source src="/logoVideo.mp4" type="video/mp4" />
            </video>


            {videoPlay ? <motion.div transition={{ type: "spring", stiffness: 200 }} initial={{ scale: 1 }} whileHover={{ scale: 1.15 }} whileTap={{ y: 2.5 }} className=" absolute top-5 md:top-10 right-5 md:right-10">
              <div onClick={togglePlayPause} className="flex bg-[#f1f2ee] opacity-75 cursor-pointer rounded-full w-14 md:w-20 h-14 md:h-20 justify-center items-center">
                <svg className="w-6 md:w-fit" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H8.5C9.05229 19.5 9.5 19.0523 9.5 18.5V5.5C9.5 4.94772 9.05229 4.5 8.5 4.5Z" stroke="#17191b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 4.5H15.5C14.9477 4.5 14.5 4.94772 14.5 5.5V18.5C14.5 19.0523 14.9477 19.5 15.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5Z" stroke="#17191b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div> :
              <motion.div transition={{ type: "spring", stiffness: 200 }} initial={{ scale: 1 }} whileHover={{ scale: 1.15 }} whileTap={{ y: 2.5 }} className=" absolute top-5 md:top-10 right-5 md:right-10">
                <div onClick={togglePlayPause} className="flex bg-[#f1f2ee] opacity-75 cursor-pointer rounded-full w-14 md:w-20 h-14 md:h-20 justify-center items-center">
                  <svg className="w-6 md:w-fit" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.64386 5.02467V18.9711C5.64455 19.257 5.72521 19.5371 5.87674 19.7796C6.02827 20.0221 6.24461 20.2173 6.50132 20.3433C6.75802 20.4693 7.04484 20.5209 7.32935 20.4924C7.61387 20.4638 7.88473 20.3563 8.11131 20.1818L17.7665 12.6722C17.9577 12.523 18.1108 12.3305 18.2131 12.1106C18.3154 11.8907 18.3641 11.6497 18.3551 11.4073C18.3461 11.165 18.2798 10.9282 18.1615 10.7165C18.0432 10.5047 17.8763 10.3241 17.6746 10.1894L8.01935 3.75264C7.78885 3.60084 7.52164 3.5141 7.24593 3.50158C6.97022 3.48906 6.69625 3.55122 6.45294 3.68151C6.20964 3.8118 6.00603 4.00537 5.86362 4.24178C5.72121 4.4782 5.64528 4.74868 5.64386 5.02467Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </motion.div>
            }

            <motion.div transition={{ type: "spring", stiffness: 200 }} initial={{ scale: 1 }} whileHover={{ scale: 1.15 }} whileTap={{ y: 2.5 }} className=" absolute top-5 md:top-10 left-5 md:left-10">
              <div onClick={handleUnumuteVideo} className="flex bg-[#f1f2ee] opacity-75 cursor-pointer rounded-full w-14 md:w-20 h-14 md:h-20 justify-center items-center">
                <svg className="w-7 md:w-fit" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 14.0881V9.91184C3 9.49649 3.14223 9.09814 3.39541 8.80445C3.64858 8.51075 3.99197 8.34575 4.35002 8.34575H6.24005C6.47678 8.34461 6.70927 8.2727 6.91506 8.13694L10.8842 5.5059C11.0892 5.37099 11.3211 5.30072 11.5569 5.30208C11.7926 5.30343 12.0239 5.37638 12.2278 5.51364C12.4317 5.65091 12.601 5.84771 12.719 6.08448C12.837 6.32125 12.8994 6.58972 12.9002 6.86318V17.1368C12.8994 17.4102 12.837 17.6787 12.719 17.9154C12.601 18.1522 12.4317 18.3491 12.2278 18.4863C12.0239 18.6235 11.7926 18.6965 11.5569 18.6979C11.3211 18.6992 11.0892 18.629 10.8842 18.494L6.91506 15.863C6.70927 15.7272 6.47678 15.6553 6.24005 15.6542H4.35002C3.99197 15.6542 3.64858 15.4891 3.39541 15.1955C3.14223 14.9018 3 14.5035 3 14.0881Z" stroke="#17191b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.2278 15.7145C17.2301 14.7122 17.7933 13.3528 17.7932 11.9353C17.7933 10.5178 17.2301 9.15836 16.2278 8.15601" stroke="#17191b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M18.4954 18.0409C20.099 16.4371 21 14.2621 21 11.9941C21 9.72604 20.099 7.55094 18.4954 5.94727" stroke="#17191b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        <div className=" h-max sm:h-max relative w-screen p-6 sm:p-12 py-28 sm:py-44 sm:pr-16 flex flex-col justify-center">

          <div className="w-full justify-between gap-y-8 sm:gap-y-0 flex flex-col-reverse sm:flex-row  items-end sm:items-center">
            <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }}  >
              <h1 className="text-[32px] sm:text-[38px] font-light text-right sm:text-left ">GET TO <br />KNOW US BETTER</h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}  ><div onClick={() => router.push('/about')} className="flex aboutLink cursor-pointer relative items-center gap-x-4">
              <h2 className=" text-xl text-[#17191b] font-light relative">ABOUT</h2>
              <div className=" transition-all flex justify-end w-14 h-14 relative">
                <div className=" transition-all blackcube w-[50%] h-full bg-[#17191b]"></div>
                <div className=" transition-all graycube w-8 h-8 bg-[#878c8e] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "></div>
              </div>
            </div></motion.div>
          </div>

          <div className="mt-20">
            <div className="text-[18px] hidden sm:flex gap-y-10 text-[#17191b] sm:text-4xl font-light flex-col">
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">Unlock your brand&apos;s full potential with VIVA Versa,</h1></motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">your trusted Social Media Marketing Agency.</h1></motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">We specialize in crafting compelling social media</h1></motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">strategies and captivating content that drives results,</h1></motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">Let&apos;s elevate your online presence together!</h1></motion.div>
              </div>
            </div>

            <div className=" text-[17px] flex sm:hidden  sm:text-[#17191b] gap-y-2 text-[#878c8e] sm:text-4xl font-light flex-col">
              <motion.div initial={{ y: 40 }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }} className=" leading-[34px] ">
                <div className="overflow-hidden"><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">Unlock your brand&apos;s full</h1></motion.div></div>
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">potential with VIVA Versa,</h1></motion.div></div>
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">your trusted Social</h1></motion.div></div>
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">Media Marketing Agency.</h1></motion.div></div>
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">We specialize in crafting</h1></motion.div></div>
              </motion.div>

              <motion.div initial={{ y: 40 }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }} className=" leading-[34px] mt-8">
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">compelling social media</h1></motion.div></div>
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">strategies and captivating</h1></motion.div></div>
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">content that drives results,</h1></motion.div></div>
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">Let&apos;s elevate your online</h1></motion.div></div>
                <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.3 }}><h1 className="overflow-hidden uppercase">presence together!</h1></motion.div></div>
              </motion.div>

            </div>
          </div>
        </div>

        <div className="z-0  w-screen relative h-full gap-y-16 sm:gap-y-20 flex flex-col bg-[#17191b] p-8 py-16 sm:py-12 sm:p-12 pb-28 sm:pb-44  sm:pr-16">

          <div className="flex flex-col">
            <div className="w-full justify-between gap-y-8 sm:gap-y-0 flex flex-col-reverse sm:flex-row  items-end sm:items-center">

              <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} ><div>
                <h1 className="text-[32px] sm:text-[38px] font-light text-[#f1f2ee] text-right sm:text-left">SERVICES <br /> WHAT WE&apos;RE BEST AT</h1>
              </div></motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}  ><div onClick={() => router.push('/services')} className="flex servicesLink cursor-pointer relative items-center gap-x-4">
                <h2 className=" text-xl text-[#f1f2ee] font-light relative">SERVICES</h2>
                <div className=" transition-all flex justify-end w-14 h-14 relative">
                  <div className=" transition-all whiteCube w-[50%] h-full bg-[#f1f2ee]"></div>
                  <div className=" transition-all graycube w-8 h-8 bg-[#878c8e] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "></div>
                </div>
              </div></motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}  ><p className=" mt-10  text-[16px] text-[#878c8e]">We provide tailored services for businesses to succeed in the digital landscape.</p></motion.div>

          </div>

          <div>
            <div>
              <div className="border-[#f1f2ee]">
                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 flex items-center w-full"><span className="text-[#878c8e]">01</span> SOCIAL MEDIA MARKETING</h1>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: '100%' }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
              </div>
            </div>

            <div>
              <div className=" border-[#f1f2ee]">
                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 flex items-center w-full"><span className="text-[#878c8e]">02</span> WEB DESIGN</h1>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: '100%' }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
              </div>
            </div>

            <div>
              <div className=" border-[#f1f2ee]">
                <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 flex items-center w-full"><span className="text-[#878c8e]">03</span> WEB DEVELOPMENT</h1>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: '100%' }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-max w-screen flex flex-col lg:flex-row pt-20 lg:pt-20 justify-between bg-[#f1f2ee] items-start px-0 lg:px-12 p-8 lg:p-12 pb-16 lg:pb-44 lg:pr-16">

          <motion.div className="lg:px-0 relative lg:sticky lg:top-10" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} >
            <div className=" px-8 lg:px-0 relative lg:sticky lg:top-10">
              <h1 className=" text-[16px] lg:text-[24px] font-light text-[#878c8e]">TECH STACK</h1>
              <h1 className=" text-[30px] lg:text-[38px] font-light text-[#17191b] mt-1">TECHNOLOGIES <br /> WE USE</h1>
            </div>
          </motion.div>

          <div className="grid mt-10 lg:mt-0 grid-cols-2 grid-rows-2 w-full lg:w-[60%]">
            <div className="p-24 border border-t-0 border-b-0 border-[#17191b] border-l-0 flex justify-center items-center">
              <motion.div className="stackImg absolute w-24 lg:w-32" transition={{ duration: 0.4 }} initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
                <MagneticHover>
                  <Image alt="" className="stackImg  w-24 lg:w-32" src="/next.svg" width={30} height={30} />
                </MagneticHover>
              </motion.div>
            </div>

            <div className="p-24 border-[#17191b] flex justify-center items-center">
              <motion.div className="stackImg absolute w-24 lg:w-32" transition={{ duration: 0.4 }} initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
                <MagneticHover>
                  <Image alt="" className="stackImg  w-24 lg:w-32" src="/framer.svg" width={30} height={30} />
                </MagneticHover>
              </motion.div>
            </div>

            <div className="p-24 border border-t-1 border-[#17191b] border-l-0  flex  justify-center items-center">
              <motion.div className="stackImg absolute w-24 lg:w-32" transition={{ duration: 0.4 }} initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
                <MagneticHover>
                  <Image alt="" className="stackImg w-24 lg:w-32" src="/ps.svg" width={30} height={30} />
                </MagneticHover>
              </motion.div>
            </div>

            <div className="p-24 border border-[#17191b] border-r-0 border-l-0  flex justify-center items-center">
              <motion.div className="stackImg absolute w-24 lg:w-32" initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
                <MagneticHover>
                  <Image alt="" className="stackImg  w-24 lg:w-32" src="/il.svg" width={30} height={30} />
                </MagneticHover>
              </motion.div>
            </div>

            <div className="p-24  border border-t-0 border-b-0 border-[#17191b] border-l-0  flex justify-center items-center">
              <motion.div className="stackImg absolute w-24 lg:w-32" initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
                <MagneticHover>
                  <Image alt="" className="stackImg  w-24 lg:w-32" src="/meta.svg" width={30} height={30} />
                </MagneticHover>
              </motion.div>
            </div>

            <div className="p-24  border-0 flex justify-center items-center">
              <motion.div className="stackImg absolute w-24 lg:w-32" initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
                <MagneticHover>
                  <Image alt="" className="stackImg  w-24 lg:w-32" src="/ae.svg" width={30} height={30} />
                </MagneticHover>
              </motion.div>
            </div>

          </div>
        </div>
      </div >

      <Footer />
    </>
  )
}
