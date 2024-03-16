import b1 from "../../assets/articles/1.png";
import b2 from "../../assets/articles/2.jpg";
import b3 from "../../assets/articles/3.jpg";

const Blog = () => {
  return (
    <>
      <div className="container relative md:mt-24 mt-16" id="blogs">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-6 md:text-2xl text-xl font-medium">
            Articles &amp; News
          </h3>

          <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
            Explore the latest articles published my me.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
              <img src={b1} alt="" className="w-[400px] h-[300px]" />
              <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
            </div>

            <div className="p-4">
              <a
                href="https://www.linkedin.com/pulse/revolutionizing-video-editing-sora-ai-redefining-creativity-bera-kl8vc"
                className="title text-lg font-medium hover:text-blue-500 duration-500"
              >
                Revolutionizing Video Editing with 'Sora AI' : Redefining
                Creativity and Efficiency
              </a>
              <p className="text-slate-400 dark:text-white/60 mt-3">
                Are you ready to revolutionize your video editing experience?
                Explore the possibilities with Sora AI and unleash your
                creativity like never before.
              </p>

              <div className="mt-3">
                <a
                  href="https://www.linkedin.com/pulse/revolutionizing-video-editing-sora-ai-redefining-creativity-bera-kl8vc"
                  className="hover:text-blue-500"
                >
                  Read More <i className="mdi mdi-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
              <img src={b2} alt="" className="w-[400px] h-[300px]" />
            </div>

            <div className="p-4">
              <a
                href="https://www.linkedin.com/pulse/balancing-act-nurturing-health-work-life-harmony-freelance-bera-vadsc"
                className="title text-lg font-medium hover:text-blue-500 duration-500"
              >
                Balancing Act: Nurturing Health and Work-Life Harmony in the
                Freelance Video Editing World
              </a>
              <p className="text-slate-400 dark:text-white/60 mt-3">
                As we navigate the challenges of freelance video editing in
                2024, let's collectively commit to fostering a culture that
                values health and work-life balance.
              </p>

              <div className="mt-3">
                <a
                  href="https://www.linkedin.com/pulse/balancing-act-nurturing-health-work-life-harmony-freelance-bera-vadsc"
                  className="hover:text-blue-500"
                >
                  Read More <i className="mdi mdi-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
              <img src={b3} className="w-[400px] h-[300px]" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
            </div>

            <div className="p-4">
              <a
                href="https://www.linkedin.com/pulse/unlocking-career-opportunities-power-video-editing-todays-soumen-bera-w4oic"
                className="title text-lg font-medium hover:text-blue-500 duration-500"
              >
                Unlocking Career Opportunities: The Power of Video Editing in
                Today's Digital Landscape.
              </a>
              <p className="text-slate-400 dark:text-white/60 mt-3">
                he world of video editing is brimming with opportunities for
                those who are passionate, creative, and willing to adapt.
              </p>

              <div className="mt-3">
                <a
                  href="https://www.linkedin.com/pulse/unlocking-career-opportunities-power-video-editing-todays-soumen-bera-w4oic"
                  className="hover:text-blue-500"
                >
                  Read More <i className="mdi mdi-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
