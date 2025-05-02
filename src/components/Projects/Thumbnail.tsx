import t1 from "../../assets/projects/thumbnail/1.webp";
import t2 from "../../assets/projects/thumbnail/2.webp";
import t3 from "../../assets/projects/thumbnail/3.webp";
import t4 from "../../assets/projects/thumbnail/4.webp";
import t5 from "../../assets/projects/thumbnail/5.webp";
import t6 from "../../assets/projects/thumbnail/6.webp";
import t7 from "../../assets/projects/thumbnail/7.webp";

const thumbnails = [t3, t1, t2, t4, t5, t6, t7];

const Thumbnail = () => {
  return (
    <div className="md:flex flex-wrap w-full mx-auto mt-4">
      {thumbnails.map((src, idx) => (
        <div key={idx} className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              {/* <a href={src} className="lightbox" title=""> */}
                <img src={src} className="rounded-xl" alt="" loading="lazy" />
              {/* </a> */}
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;