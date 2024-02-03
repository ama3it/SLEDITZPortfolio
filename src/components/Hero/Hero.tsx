import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./Hero.css";

import soumenheroImg from "../../assets/img/Soumen.jpg";
// import heroImg from '../../assets/img/hero.png'

const Hero = () => {
  return (
    <section className="relative overflow-hidden md:flex md:h-screen py-36 items-center bg-gray-50 dark:bg-slate-800">
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

            {/* <h5 className=" md:text-5xl md:leading-normal text-3xl leading-normal font-bold mt-3 animated-info">
              
            </h5> */}

            <p className="text-slate-400 dark:text-white/60 text-[17px] max-w-xl mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              quos obcaecati perferendis voluptatibus tempore quis, reiciendis
              dignissimos possimus veritatis alias?
            </p>

            <div className="relative mt-6 inline-flex ">
              <a
                href="#"
                className="py-2 px-3 mx-2 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-slate-500 hover:bg-slate-400 border-slate-400 hover:border-slate-400 text-white rounded-xl"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="py-2 px-5 inline-flex  items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white rounded-xl"
              >
                Contact Me <i className="mdi mdi-arrow-right ms-2"></i>
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

              <div className="absolute lg:bottom-20 -bottom-5 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <span className="font-semibold mb-0">Graphics Designer</span>
                <h6 className="text-sm text-slate-400 mt-1">
                  5+ Years Experience
                </h6>
              </div>
              {/* 
            <div className="absolute md:top-20 top-32 md:-end-10 -end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
              <h6 className="font-semibold">Web Designer</h6>
              <h6 className="text-sm text-slate-400 mt-1">
                7+ Years Experience
              </h6>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="bounce flex align-center items-center justify-center sm:hidden lg:block md:block"
      >
        <MdOutlineKeyboardDoubleArrowDown size={35} />
      </a>
    </section>
  );
};

export default Hero;
