import { useState } from "react";
import Moon from "./Moon";
import Sun from "./Sun";

const ThemeToggle = () => {
  const [isNightMode, setIsNightMode] = useState<boolean>(true);

  const toggle = () => {
    setIsNightMode((prevMode) => !prevMode);
    const htmlElement = document.documentElement;
    htmlElement.className = isNightMode ? "dark" : "light";
  };

  return (
    <>
      <div className="fixed top-1/2 -right-2 z-3">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
            onChange={toggle}
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <Moon />
            <Sun />

            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>
    </>
  );
};

export default ThemeToggle;
