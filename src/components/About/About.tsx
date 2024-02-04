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
              Better Visual <br /> Better Experience
            </h3>

            <p className="text-slate-400 dark:text-white/60 max-w-xl">
              Passionate video editor with over 5 years of experience, dedicated
              to transforming ideas into compelling visual stories. Proficient
              in Premiere Pro and Capcut PC . My mission is to deliver
              high-quality, impactful content that resonates with audiences.
            </p>

            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400 dark:text-white/60">
                  Video Editing
                </span>
                <span className="text-slate-400 dark:text-white/60">99%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div
                  className="bg-blue-500 h-[6px] rounded-full"
                  style={{ width: "99%" }}
                ></div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400 dark:text-white/60">
                  Photo Editing
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

            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400 dark:text-white/60">
                Thumbnail Designer
                </span>
                <span className="text-slate-400 dark:text-white/60">89%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div
                  className="bg-blue-500 h-[6px] rounded-full"
                  style={{ width: "89%" }}
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
