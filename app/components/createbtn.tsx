"use client";
import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Createbtn = () => {
   const router = useRouter();
   const handleClick = () => {
      router.push("/create");
   };
   return (
      <button
         onClick={handleClick}
         className="aspect-square rounded-md bg-slate-800 p-1 outline-2 transition-transform hover:outline hover:outline-blue-500 active:scale-95 sm:p-2"
      >
         <BiPlusCircle className="m-auto size-7" />
      </button>
   );
};

export default Createbtn;
