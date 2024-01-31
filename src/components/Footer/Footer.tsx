const Footer = () => {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
            <div className="lg:col-span-3 md:text-start text-center">
              <a href="#" className="text-[22px] focus:outline-none">
                <img
                  src="assets/img/logo-white.png"
                  className="mx-auto md:me-auto md:ms-0"
                  alt=""
                />
              </a>
            </div>

            <div className="lg:col-span-5 text-center mt-6 md:mt-0">
              <p className="mb-0 text-gray-400">
                ©<script>document.write(new Date().getFullYear())</script>2024
                SlEditz. Developed with ❤️ by
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-linkedin h-[14px] w-[14px] align-middle"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>

              <li className="inline">
                <a
                  href="#"
                  target="_blank"
                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-300 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-facebook h-[14px] w-[14px] align-middle"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </li>

              <li className="inline">
                <a
                  href="#"
                  target="_blank"
                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-300 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-instagram h-[14px] w-[14px] align-middle"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>

              <li className="inline">
                <a
                  href="#"
                  target="_blank"
                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-300 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-twitter h-[14px] w-[14px] align-middle"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </li>

              <li className="inline">
                <a
                  href="#"
                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center border border-gray-800 dark:border-slate-800 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-300 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-mail h-[14px] w-[14px] align-middle"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
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
