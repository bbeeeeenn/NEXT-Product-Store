"use client";
import { BiBrightness } from "react-icons/bi";

import React, { useEffect, useState } from "react";

const ThemeButton = () => {
   const [theme, setTheme] = useState("");

   const switchTheme = () => {
      setTheme((prev) => {
         const nextTheme = prev == "dark" ? "light" : "dark";
         localStorage.setItem("theme", nextTheme);
         return nextTheme;
      });
   };

   useEffect(() => {
      const savedTheme = window.localStorage.getItem("theme");
      if (savedTheme) {
         setTheme(savedTheme);
      } else {
         setTheme("light");
      }
   }, []);
   return (
      <button
         onClick={switchTheme}
         className={`${theme} bg-secondary aspect-square rounded-md p-1 shadow-md outline-2 transition-transform hover:outline hover:outline-blue-500 active:scale-95 sm:p-2`}
      >
         <BiBrightness className="m-auto size-7" />
      </button>
   );
};

export default ThemeButton;
