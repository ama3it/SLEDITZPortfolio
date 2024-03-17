import t1 from "../../assets/projects/thumbnail/1.webp";
import t2 from "../../assets/projects/thumbnail/2.webp";
import t3 from "../../assets/projects/thumbnail/3.webp";
import t4 from "../../assets/projects/thumbnail/4.webp";
import t5 from "../../assets/projects/thumbnail/5.webp";
import t6 from "../../assets/projects/thumbnail/6.webp";
import t7 from "../../assets/projects/thumbnail/7.webp";

const Thumbnail = () => {
  return (
    <>
    
    <div className="md:flex flex-wrap w-full mx-auto mt-4">
        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <a href={t3} className="lightbox" title="">
                <img src={t3} className="rounded-xl" alt="" />
              </a>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <a href={t1} className="lightbox" title="">
                <img src={t1} className="rounded-xl" alt="" />
              </a>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <a href={t2} className="lightbox" title="">
                <img src={t2} className="rounded-xl" alt="" />
              </a>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <a href={t4} className="lightbox" title="">
                <img src={t4} className="rounded-xl" alt="" />
              </a>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <a href={t5} className="lightbox" title="">
                <img src={t5} className="rounded-xl" alt="" />
              </a>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <a href={t6} className="lightbox" title="">
                <img src={t6} className="rounded-xl" alt="" />
              </a>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <a href={t7} className="lightbox" title="">
                <img src={t7} className="rounded-xl" alt="" />
              </a>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Thumbnail