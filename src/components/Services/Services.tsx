import colorSwatches from "../../assets/img/color-swatches.svg";
import productionBeltTime from "../../assets/img/production-belt-time.svg";
import decentWorkAndEconomicGrowth from "../../assets/img/decent-work-and-economic-growth.svg"
import picturesFolderMemories from "../../assets/img/pictures-folder-memories.svg"
import layers1 from "../../assets/img/layers-1.svg"
import  flipHorizontalArrow1 from "../../assets/img/flip-horizontal-arrow-1.svg"
import Placeholder from "./Placeholder"

const Services = () => {
  return (
    <div className="container relative md:mt-24 mt-16">
    <div className="grid grid-cols-1 pb-6 text-center">
      <h3 className="mb-6 md:text-2xl text-xl font-medium">What I do?</h3>

      <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo
        doloremque, tenetur beatae voluptates sed sint qui deleniti expedita
        itaque!
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
      <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
        <div className="relative overflow-hidden text-transparent -m-3">
          <Placeholder />

          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-blue-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
            <img src={colorSwatches} className="h-8" alt="" />
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-lg font-medium duration-500 hover:text-blue-500"
          >
            Grow Your Business
          </a>
          <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor nostrum expedita, rem ducimus veniam.
          </p>
        </div>
      </div>

      <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
        <div className="relative overflow-hidden text-transparent -m-3">
          <Placeholder />
          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-blue-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
            <img
              src={decentWorkAndEconomicGrowth}
              className="h-8"
              alt=""
            />
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-lg font-medium duration-500 hover:text-blue-500"
          >
            Drive More Sales
          </a>
          <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate soluta voluptatem suscipit natus vitae mollitia!
          </p>
        </div>
      </div>

      <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
        <div className="relative overflow-hidden text-transparent -m-3">
          <Placeholder />
          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-blue-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
            <img
              src={flipHorizontalArrow1}
              className="h-8"
              alt=""
            />
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-lg font-medium duration-500 hover:text-blue-500"
          >
            Handled By Expert
          </a>
          <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolorem nihil ex qui repellendus atque!
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
            Discussion For Idea
          </a>
          <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque magnam doloremque natus ipsa voluptates.
          </p>
        </div>
      </div>

      <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
        <div className="relative overflow-hidden text-transparent -m-3">
          <Placeholder />
          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-blue-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
            <img
              src={picturesFolderMemories}
              className="h-8"
              alt=""
            />
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-lg font-medium duration-500 hover:text-blue-500"
          >
            Increase Conversion
          </a>
          <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
            If the distribution of letters and 'words' is random, the reader
            will not be distracted from making.
          </p>
        </div>
      </div>

      <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
        <div className="relative overflow-hidden text-transparent -m-3">
          <Placeholder />
          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-blue-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
            <img src={productionBeltTime} className="h-8" alt="" />
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-lg font-medium duration-500 hover:text-blue-500"
          >
            Sales Growth Idea
          </a>
          <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
            If the distribution of letters and 'words' is random, the reader
            will not be distracted from making.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services