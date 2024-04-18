import "./socialbutton.css";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ThemeToggle = () => {
  return (
    <>
      <div className="fixed top-1/3 right-0 z-3">
        <span className="relative inline-block">
          <ul className="social">
            <li className="bg-[#0A66C2]">
              <a
                href="https://www.linkedin.com/in/soumen-bera-7a164a26b"
                target="_blank"
              >
                <FaLinkedinIn className="fa" />
              </a>
            </li>
            <li className="bg-[#E1306C]">
              <a href="https://www.instagram.com/sledi_tz" target="_blank">
                <FaInstagram className="fa" />
              </a>
            </li>
            <li className="bg-[#545454]">
              <a href="mailto:Sleditz87@gmail.com">
                <MdEmail className="fa" />
              </a>
            </li>

            <li className="bg-[#25d366]">
              <a
                href="https://wa.me/919382217782?text=Hello"
                target="_blank"
              >
                <FaWhatsapp className="fa" />
              </a>
            </li>

            <li className="bg-[#ff4343]">
              <a
                href="https://www.youtube.com/@SlEditz_official"
                target="_blank"
              >
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
