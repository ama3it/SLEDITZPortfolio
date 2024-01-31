import img1 from "../../assets/img/1.jpg"
import img01 from "../../assets/img/01.jpg"
import img02 from "../../assets/img/2_002.jpg"
import img03 from "../../assets/img/3.jpg"


const Blog = () => {
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-6 md:text-2xl text-xl font-medium">
            Blogs &amp; News
          </h3>

          <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
            This is just a simple text made for this unique and awesome
            template, you can replace it with any text.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
              <img src={img1} className="" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                <img
                  src={img01}
                  className="h-9 w-9 rounded-xl"
                  alt=""
                />
                <div className="ms-2">
                  <a
                    href=""
                    className="text-white hover:text-blue-500 text-[15px]"
                  >
                    Calvin Carlo
                  </a>
                  <p className="text-white/70 text-sm">5 Min Read</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <a
                href="https://amamit.medium.com/firebase-integration-with-react-3f5c74316e0f"
                className="title text-lg font-medium hover:text-blue-500 duration-500"
              >
                Design your apps in your own way
              </a>
              <p className="text-slate-400 dark:text-white/60 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>

              <div className="mt-3">
                <a
                  href="https://amamit.medium.com/firebase-integration-with-react-3f5c74316e0f"
                  className="hover:text-blue-500"
                >
                  Read More <i className="mdi mdi-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
              <img src={img02} className="" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                <img
                  src={img01}
                  className="h-9 w-9 rounded-xl"
                  alt=""
                />
                <div className="ms-2">
                  <a
                    href=""
                    className="text-white hover:text-blue-500 text-[15px]"
                  >
                    Calvin Carlo
                  </a>
                  <p className="text-white/70 text-sm">5 Min Read</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <a
                href="https://amamit.medium.com/firebase-integration-with-react-3f5c74316e0f"
                className="title text-lg font-medium hover:text-blue-500 duration-500"
              >
                How apps is changing the IT world
              </a>
              <p className="text-slate-400 dark:text-white/60 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>

              <div className="mt-3">
                <a
                  href="https://amamit.medium.com/firebase-integration-with-react-3f5c74316e0f"
                  className="hover:text-blue-500"
                >
                  Read More <i className="mdi mdi-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
              <img src={img03} className="" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
              <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
                <img
                  src={img01}
                  className="h-9 w-9 rounded-xl"
                  alt=""
                />
                <div className="ms-2">
                  <a
                    href=""
                    className="text-white hover:text-blue-500 text-[15px]"
                  >
                    Calvin Carlo
                  </a>
                  <p className="text-white/70 text-sm">5 Min Read</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <a
                href="https://amamit.medium.com/firebase-integration-with-react-3f5c74316e0f"
                className="title text-lg font-medium hover:text-blue-500 duration-500"
              >
                Smartest Applications for Business
              </a>
              <p className="text-slate-400 dark:text-white/60 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>

              <div className="mt-3">
                <a
                  href="https://amamit.medium.com/firebase-integration-with-react-3f5c74316e0f"
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
