import "./Nav.css";

import slEditz from "../../assets/img/SlEditz.png";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [submenu, setSubmenu] = useState<boolean>(false);

  const navToggle = () => {
    setMobileNav((prevState) => !prevState);
  };

  const submenuToogle = () => {
    setSubmenu((prevState) => !prevState);
  };

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
            <li className="inline mb-0">
              <a
                href="https://www.linkedin.com/in/soumen-bera-7a164a26b"
                target="_blank"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#0A66C2] hover:bg-[#0A66C2] border border-[#0A66C2] hover:border-[#0A66C2] text-white"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="inline mb-0 mx-1">
              <a
                href="https://www.instagram.com/sledi_tz"
                target="_blank"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#E1306C] hover:bg-[#E1306C] border border-[#E1306C] hover:border-[#E1306C] text-white"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="inline mb-0 mx-0">
              <a
                href="mailto:Sleditz87@gmail.com"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#545454] hover:bg-[#545454] border border-[#545454] hover:border-[#545454] text-white"
              >
                <MdEmail />
              </a>
            </li>

            <li className="inline mb-0 mx-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#316FF6] hover:bg-[#316FF6] border border-[#316FF6] hover:border-[#316FF6] text-white"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="inline mb-0 mx-0">
              <a
                href="https://www.youtube.com/@SlEditz_official"
                target="_blank"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#ff4343] hover:bg-[#ff4343] border border-[#ff4343] hover:border-[#ff4343] text-white"
              >
                <FaYoutube />
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

              <li
                className="has-submenu parent-menu-item "
                onClick={submenuToogle}
              >
                <a href="#">Services</a>
                <span className="menu-arrow"></span>
                <ul className={submenu ? "submenu open" : "submenu"}>
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
