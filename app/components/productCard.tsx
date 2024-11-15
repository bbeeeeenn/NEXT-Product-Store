"use client";
import { BiEdit, BiTrash } from "react-icons/bi";
import Image from "next/legacy/image";
import React, { useState } from "react";

const ProductCard = ({ id, name, price, imgSrc }: any) => {
   const [alive, setAlive] = useState(true);
   const handleDelete = async () => {
      try {
         const res = await fetch("/api/products/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id }),
         });
         setAlive(false);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      alive && (
         <div className="h-auto overflow-hidden rounded-lg bg-slate-800 transition-transform duration-500 hover:-translate-y-1">
            <div className="relative h-40 w-full">
               <Image
                  src={
                     imgSrc ||
                     "https://images.unsplash.com/photo-1471014645228-037cfcd2bdc1?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
               />
            </div>
            <div className="flex flex-col gap-1 p-3 font-bold text-slate-300">
               <p>{name}</p>
               <p>${price}</p>
               <div className="text-black">
                  <button className="mr-2 cursor-pointer rounded-sm bg-blue-500 p-1">
                     <BiEdit className="size-6" />
                  </button>
                  <button
                     onClick={handleDelete}
                     className="cursor-pointer rounded-sm bg-orange-500 p-1"
                  >
                     <BiTrash className="size-6" />
                  </button>
               </div>
            </div>
         </div>
      )
   );
};

export default ProductCard;
