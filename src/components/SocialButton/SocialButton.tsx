import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import "./socialbutton.css";
const ThemeToggle = () => {
  return (
    <>
      <div className="fixed top-1/3 left-0 z-3">
        <span className="relative inline-block">
          <ul className="social">
            <li className="bg-[#0A66C2]">
              <a href="#">
                <FaLinkedinIn className="fa" />
              </a>
            </li>

            <li className=" bg-[#000000]">
              <a href="#">
                <FaXTwitter className="fa" />
              </a>
            </li>

            <li className="bg-[#E1306C]">
              <a href="#">
                <FaInstagram className="fa" />
              </a>
            </li>
            <li className="bg-[#316FF6]">
              <a href="#">
                <FaFacebookF className="fa" />
              </a>
            </li>
            <li className="bg-[#CD201F]">
              <a href="#">
                <FaYoutube className="fa" />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default ThemeToggle;
