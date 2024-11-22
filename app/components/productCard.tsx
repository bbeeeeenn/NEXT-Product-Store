"use client";
import { BiEdit, BiTrash } from "react-icons/bi";
import Image from "next/legacy/image";
import React, { useState } from "react";

const ProductCard = ({
   id,
   name,
   price,
   imgSrc,
   setProducts,
}: {
   id: any;
   name: string;
   price: number;
   imgSrc: string;
   setProducts: any;
}) => {
   const [deleting, setDeleting] = useState(false);
   const handleDelete = async () => {
      setDeleting(true);
      try {
         await fetch("/api/products/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id }),
         });
         setProducts((prev: { _id: string }[]) => {
            return prev.filter((product) => product._id.toString() !== id);
         });
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="bg-secondary h-auto overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:-translate-y-1">
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
         <div className="text-textclr flex flex-col gap-1 p-3 font-bold">
            <p>{name}</p>
            <p>${price}</p>
            <div className="text-black">
               <button className="bg-edit mr-2 cursor-pointer rounded-sm p-1 active:scale-95">
                  <BiEdit className="size-6" />
               </button>
               <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className={`${deleting && "brightness-75"} bg-delete rounded-sm p-1 transition-all active:scale-95`}
               >
                  <BiTrash className="size-6" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
