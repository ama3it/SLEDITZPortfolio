import "./Nav.css";

import slEditz from "../../assets/img/SlEditz.png";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail, MdWhatsapp } from "react-icons/md";


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
        

          <ul className="buy-button list-none mb-0" id="socialicons">
            <li className="inline mb-0">
              <a
                href="https://www.linkedin.com/in/soumen-bera-7a164a26b"
                target="_blank"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#0A66C2] hover:bg-[#00A0DC] border border-[#0A66C2] hover:border-[#00A0DC] text-white"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="inline mb-0 mx-1">
              <a
                href="https://www.instagram.com/sledi_tz"
                target="_blank"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#E1306C] hover:bg-[#F371AF] border border-[#E1306C] hover:border-[#F371AF] text-white"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="inline mb-0 mx-0">
              <a
                href="mailto:Sleditz87@gmail.com"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#545454] hover:bg-[#B6B9BC] border border-[#545454] hover:border-[#B6B9BC] text-white"
              >
                <MdEmail />
              </a>
            </li>
            <li className="inline mb-0 mx-1">
              <a
                href="https://wa.me/917478874759?text=Hello"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#25d366] hover:bg-[#25d365a1] border border-[#25d366] hover:border-[#25d365a1] text-white"
              >
                <MdWhatsapp />
              </a>
            </li>

            <li className="inline mb-0 mx-0">
              <a
                href="https://www.youtube.com/@SlEditz_official"
                target="_blank"
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-[#ff4343] hover:bg-[#F16D64] border border-[#ff4343] hover:border-[#F16D64] text-white"
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
              <li>
                <a href="#" className="sub-menu-item">
                  Home
                </a>
              </li>
              {/* 
              <li>
                <a href="#about" className="sub-menu-item">
                  About
                </a>
              </li> */}

              <li
                className="has-submenu parent-menu-item "
                onClick={submenuToogle}
              >
                <a href="#services">Services</a>
                <span className="menu-arrow"></span>
                <ul className={submenu ? "submenu open" : "submenu"}>
                  <li>
                    <a href="#services" className="sub-menu-item">
                      Video Editing
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="sub-menu-item">
                      Thumbnail Design
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="sub-menu-item">
                      Photo Editing
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#projects" className="sub-menu-item">
                  My Works
                </a>
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
