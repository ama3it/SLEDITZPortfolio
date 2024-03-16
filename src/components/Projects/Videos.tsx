const Videos = () => {
  return (
    <>
      <div className="md:flex flex-wrap w-full mx-auto mt-4">
        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/88HfpKzdOaY?si=jpKksRRQI51HvzDN"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/zBojTyNs_uU?si=eEdFMXPUqlHLEZLa"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/YcjLCF8on_E?si=qn-XLl2ETAzl8Dsn"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div>
{/* 
        <div className="lg:w-1/2 md:w-1/3 p-3 picture-item animate">
          <div className="group relative block rounded-xl duration-700 ease-in-out">
            <div className="relative overflow-hidden rounded-xl">
              <iframe
                width="100%"
                height="300"
                src="https://youtube.com/shorts/Y9GNY5W7Po4?si=PrhjwbMOrxVZmZ1z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Videos;
