"use client";
import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";

const createbtn = () => {
   const router = useRouter();
   const handleClick = () => {
      router.push("/create");
   };
   return (
      <button
         onClick={handleClick}
         className="aspect-square h-10 rounded-md bg-slate-800"
      >
         <BiPlusCircle className="m-auto size-7" />
      </button>
   );
};

export default createbtn;
