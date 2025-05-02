import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./Hero.css";

import soumenheroImg from "../../assets/img/Soumen.webp";
import resume from "../../assets/resume.pdf";
import backgroundVideo from "../../assets/Showreel2.mp4"; // Add your video file here

const Hero = () => {
  return (
    <>
      {/* Fullscreen Video Section */}
      <section className="relative h-screen w-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag. Please open in another
          browser.
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome to SlEditz Studio</h2>
            <p className="text-lg mb-6">
              Watch our introduction video to learn more about what we do.
            </p>
          </div> */}
        </div>

        <a
          href="#about"
          className="bounce flex align-center items-center justify-center sm:hidden lg:block md:block"
        >
          <MdOutlineKeyboardDoubleArrowDown size={35} className="text-white" />
        </a>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden md:flex md:h-screen py-36 items-center bg-gray-50 dark:bg-zinc-950">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="">
              <h5 className="font-semibold leading-normal text-[20px] mt-6 animated animated-text">
                Hi, I'm
              </h5>

              <h5 className="md:text-5xl md:leading-normal text-3xl leading-normal text-blue-500 font-bold mt-3 ">
                <span className="animated-item">Soumen Bera</span>{" "}
                <span className="animated-item">A Freelancer</span>{" "}
                <span className="animated-item">A Video Editor</span>
                <br />
              </h5>

              <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4">
                Welcome to SlEditz's Video Editing Studio! Crafting Engaging
                Visual Narratives.
              </p>

              <div className="relative mt-6 inline-flex ">
                <a
                  href={resume}
                  className="py-2 px-3 mx-2 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center  hover:bg-zinc-700 bg-zinc-800 hover:border-zinc-700 text-white rounded-xl"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="py-2 px-5 inline-flex  items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white rounded-xl"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="relative lg:ms-6">
              <div className="relative z-1">
                <img
                  className="about_image"
                  src={soumenheroImg}
                  alt="soumen.png"
                />

                <div className="absolute lg:bottom-20 -bottom-5 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-black m-3 w-44 text-center">
                  <span className="font-semibold mb-0">Graphics Designer</span>
                  <h6 className="text-sm text-slate-400 mt-1">
                    5+ Years Experience
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
