import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Logo from "../../assets/img/SlEditz.png";
import { MdMail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
            <div className="lg:col-span-3 md:text-start text-center">
              <a href="#" className="text-[22px] focus:outline-none">
                <img
                  src={Logo}
                  className="mx-auto md:me-auto md:ms-0 h-9"
                  alt=""
                />
              </a>
            </div>

            <div className="lg:col-span-5 text-center mt-6 md:mt-0">
              <p className="mb-0 text-gray-400">
                ©2024 SlEditz. Developed with ❤️ by
                <a
                  href="https://amamit.in"
                  target="_blank"
                  className="text-reset"
                >
                  &nbsp;amit
                </a>
                .
              </p>
            </div>

            <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
              <li className="inline">
                <a
                    href="https://www.linkedin.com/in/soumen-bera-7a164a26b"
                    target="_blank"
                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-300 hover:text-white"
                >
                <BsLinkedin className="feather feather-mail h-[14px] w-[14px] align-middle" width={24} height={24} />
                </a>
              </li>

              <li className="inline">
                <a
                  href="https://www.instagram.com/sledi_tz" target="_blank"
                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-300 hover:text-white"
                >
                 <BsInstagram className="feather feather-mail h-[14px] w-[14px] align-middle" width={24} height={24} />
                </a>
              </li>

              <li className="inline">
                <a
                  href="mailto:Sleditz87@gmail.com"
                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-300 hover:text-white"
                >
                 <MdMail className="feather feather-mail h-[14px] w-[14px] align-middle" width={24} height={24} />
                </a>
              </li>

              <li className="inline">
                <a
                  href="https://www.youtube.com/@SlEditz_official"
                  target="_blank"
                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-300 hover:text-white"
                >
                   
                  <BsYoutube  className="feather feather-mail h-[14px] w-[14px] align-middle" width={24} height={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
