import VideoIcon from "../../assets/img/video.png";

import picturesFolderMemories from "../../assets/img/pictures-folder-memories.svg";
import layers1 from "../../assets/img/layers-1.svg";

import Placeholder from "./Placeholder";

const Services = () => {
  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-6 md:text-2xl text-xl font-medium">What I do?</h3>

        <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
          A glimpse into the services I offer to create impactful and innovative
          solutions tailored to your needs and goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Placeholder />

            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-blue-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
              <img src={VideoIcon} className="h-8" alt="" />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-lg font-medium duration-500 hover:text-blue-500">
              Video Editing
            </p>
            <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
              Transform your content into captivating stories with expert video
              editing services for a memorable experience.
            </p>
          </div>
        </div>

        <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Placeholder />
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-blue-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
              <img src={picturesFolderMemories} className="h-8" alt="" />
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="text-lg font-medium duration-500 hover:text-blue-500"
            >
              Photo Editing
            </a>
            <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
              Enhance your memories with professional photo editing, bringing
              out the best in every image effortlessly.
            </p>
          </div>
        </div>
        <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Placeholder />
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-blue-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
              <img src={layers1} className="h-8" alt="" />
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="text-lg font-medium duration-500 hover:text-blue-500"
            >
              Thumbnail Design
            </a>
            <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
              Elevate your content with eye-catching thumbnail designs that grab
              attention and boost engagement instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
