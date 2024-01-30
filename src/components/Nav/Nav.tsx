import "./Nav.css";
import logoDark from "../../assets/img/logo-dark.png";
import logoWhite from "../../assets/img/logo-white.png";
import { useState } from "react";

const Nav = () => {
  const [mobileNav,setMobileNav]=useState<boolean>(false)

  const navToggle=()=>{

    setMobileNav(prevState => !prevState )
  }
    
  return (
    <>
      <nav id="topnav" className="defaultscroll is-sticky">
        <div className="container relative">
            
          <a
            className="logo"
            href="https://shreethemes.in/muvico/layouts/index.html"
          >
            <img
              src={logoDark}
              className="h-5 inline-block dark:hidden"
              alt=""
            />
            <img
              src={logoWhite}
              className="h-5 hidden dark:inline-block"
              alt=""
            />
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <a className={mobileNav?"navbar-toggle open":"navbar-toggle"} id="isToggle" onClick={navToggle}>
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
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
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
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
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
            <li className="inline mb-0 ">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"
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
                  className="feather feather-github h-[14px] w-[14px] align-middle"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
          </ul>

          <div id="navigation" style={{display:mobileNav?'block':'none'}}>
            <ul className="navigation-menu justify-end">
              <li className="has-submenu parent-menu-item active">
                <a href="/">Home</a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li className="active">
                    <a
                      href="https://shreethemes.in/muvico/layouts/index.html"
                      className="sub-menu-item active"
                    >
                      Hero One
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://shreethemes.in/muvico/layouts/index-two.html"
                      className="sub-menu-item"
                    >
                      Hero Two
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://shreethemes.in/muvico/layouts/index-three.html"
                      className="sub-menu-item"
                    >
                      Hero Three
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="https://shreethemes.in/muvico/layouts/aboutus.html"
                  className="sub-menu-item"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="https://shreethemes.in/muvico/layouts/services.html"
                  className="sub-menu-item"
                >
                  Services
                </a>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="javascript:void(0)">Portfolio</a>
                <span className="menu-arrow"></span>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li className="megamenu-head">Modern Portfolio</li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-modern-two.html"
                          className="sub-menu-item"
                        >
                          Two Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-modern-three.html"
                          className="sub-menu-item"
                        >
                          Three Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-modern-four.html"
                          className="sub-menu-item"
                        >
                          Four Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-modern-five.html"
                          className="sub-menu-item"
                        >
                          Five Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-modern-six.html"
                          className="sub-menu-item"
                        >
                          Six Column
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="megamenu-head">Classic Portfolio</li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-classic-two.html"
                          className="sub-menu-item"
                        >
                          Two Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-classic-three.html"
                          className="sub-menu-item"
                        >
                          Three Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-classic-four.html"
                          className="sub-menu-item"
                        >
                          Four Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-classic-five.html"
                          className="sub-menu-item"
                        >
                          Five Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-classic-six.html"
                          className="sub-menu-item"
                        >
                          Six Column
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="megamenu-head">Creative Portfolio</li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-creative-two.html"
                          className="sub-menu-item"
                        >
                          Two Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-creative-three.html"
                          className="sub-menu-item"
                        >
                          Three Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-creative-four.html"
                          className="sub-menu-item"
                        >
                          Four Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-creative-five.html"
                          className="sub-menu-item"
                        >
                          Five Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-creative-six.html"
                          className="sub-menu-item"
                        >
                          Six Column
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="megamenu-head">Masonry Portfolio</li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-masonry-two.html"
                          className="sub-menu-item"
                        >
                          Two Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-masonry-three.html"
                          className="sub-menu-item"
                        >
                          Three Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-masonry-four.html"
                          className="sub-menu-item"
                        >
                          Four Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-masonry-five.html"
                          className="sub-menu-item"
                        >
                          Five Column
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-masonry-six.html"
                          className="sub-menu-item"
                        >
                          Six Column
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="megamenu-head">Portfolio Detail</li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-detail-one.html"
                          className="sub-menu-item"
                        >
                          Portfolio One
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-detail-two.html"
                          className="sub-menu-item"
                        >
                          Portfolio Two
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-detail-three.html"
                          className="sub-menu-item"
                        >
                          Portfolio Three
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shreethemes.in/muvico/layouts/portfolio-detail-four.html"
                          className="sub-menu-item"
                        >
                          Portfolio Four
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Blog</a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <a
                      href="https://shreethemes.in/muvico/layouts/blogs.html"
                      className="sub-menu-item"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://shreethemes.in/muvico/layouts/blog-detail.html"
                      className="sub-menu-item"
                    >
                      Blog Detail
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="https://shreethemes.in/muvico/layouts/contactus.html"
                  className="sub-menu-item"
                >
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
