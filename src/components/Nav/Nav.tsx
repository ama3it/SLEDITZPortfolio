import "./Nav.css";

import slEditz from "../../assets/img/SlEditz.png"
import { useState } from "react";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [submenu,setSubmenu]=useState<boolean>(false)

  const navToggle = () => {
    setMobileNav((prevState) => !prevState);
  };

  const submenuToogle=()=>{
    setSubmenu((prevState)=>!prevState)
  }

  return (
    <>
      <nav id="topnav" className="defaultscroll is-sticky nav-sticky">
        <div className="container relative">
          <a className="logo" href="/">
            <img
              src={slEditz}
              className="h-9 inline-block dark:hidden"
              alt=""
            />
            <img
              src={slEditz}
              className="h-9 hidden dark:inline-block"
              alt=""
            />
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <a
                className={mobileNav ? "navbar-toggle open" : "navbar-toggle"}
                id="isToggle"
                onClick={navToggle}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul className="buy-button list-none mb-0">
            <li className="inline mb-0 ">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-blue-500 hover:bg-blue-600 border border-blue-500 hover:border-blue-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-dribbble h-[14px] w-[14px] align-middle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </a>
            </li>
            <li className="inline mb-0 mx-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-blue-500 hover:bg-blue-600 border border-blue-500 hover:border-blue-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin h-[14px] w-[14px] align-middle"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
            <li className="inline mb-0 ">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-blue-500 hover:bg-blue-600 border border-blue-500 hover:border-blue-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github h-[14px] w-[14px] align-middle"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
          </ul>

          <div
            id="navigation"
            style={{ display: mobileNav ? "block" : "none" }}
          >
            <ul className="navigation-menu justify-end">

              <li className="active">
                <a href="#" className="sub-menu-item">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="sub-menu-item">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="sub-menu-item">
                  My Works
                </a>
              </li>

              <li className="has-submenu parent-menu-item " onClick={submenuToogle}>
                <a href="#">Services</a>
                <span className="menu-arrow"></span>
                <ul className={submenu?"submenu open":"submenu"}>
                  <li>
                    <a href="#" className="sub-menu-item">
                      Video Editing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sub-menu-item">
                      Photo
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#blogs" className="sub-menu-item">
                  blogs
                </a>
              </li>

              <li>
                <a href="#contact" className="sub-menu-item">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
