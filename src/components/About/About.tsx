const About = () => {
  return (
    <div className="container relative md:pb-24 pb-16" id="about">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
        <div className="lg:col-span-5 md:col-span-6">
          <div className="relative">
            <div className="relative flex justify-end">
              <iframe
                width="560"
                height="415"
                className="rounded-xl"
                src="https://www.youtube.com/embed/nqIAKW92TBM?si=xfpndmS2dub0FqtU"
                title="About Me"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 md:col-span-6">
          <div className="lg:ms-5">
            <h6 className="text-blue-500 text-sm font-medium uppercase mb-2">
              About Me
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium">
              Better Design <br /> Better Experience
            </h3>

            <p className="text-slate-400 dark:text-white/60 max-w-xl">
              Passionate and versatile graphics designer with a keen eye for
              detail. Expert in visual communication, using creativity and
              technical skills to bring ideas to life through captivating
              designs.
            </p>

            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400 dark:text-white/60">
                  Designing
                </span>
                <span className="text-slate-400 dark:text-white/60">84%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div
                  className="bg-blue-500 h-[6px] rounded-full"
                  style={{ width: "84%" }}
                ></div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400 dark:text-white/60">
                  Photography
                </span>
                <span className="text-slate-400 dark:text-white/60">79%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div
                  className="bg-blue-500 h-[6px] rounded-full"
                  style={{ width: "79%" }}
                ></div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400 dark:text-white/60">
                  Editing
                </span>
                <span className="text-slate-400 dark:text-white/60">95%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div
                  className="bg-blue-500 h-[6px] rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
