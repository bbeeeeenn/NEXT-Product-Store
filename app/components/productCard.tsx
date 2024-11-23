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
   setEditing,
}: {
   id: any;
   name: string;
   price: number;
   imgSrc: string;
   setProducts: any;
   setEditing: any;
}) => {
   // States
   const [img, setImg] = useState(imgSrc);
   const [deleting, setDeleting] = useState(false);

   // Functions
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

   const handleEdit = () => {
      setEditing({ id, name, price, imgSrc });
   };
   return (
      <div className="h-auto overflow-hidden rounded-lg bg-secondary shadow-lg transition-transform duration-500 hover:-translate-y-1">
         <div className="relative h-40 w-full">
            <Image
               src={img}
               onError={() => setImg("/backupimg.avif")}
               alt={name}
               layout="fill"
               objectFit="cover"
               priority={true}
            />
         </div>
         <div className="flex flex-col gap-1 p-3 font-bold text-textclr">
            <p>{name}</p>
            <p>${price}</p>
            <div className="text-black">
               <button
                  onClick={handleEdit}
                  className="mr-2 cursor-pointer rounded-sm bg-edit p-1 active:scale-95"
               >
                  <BiEdit className="size-6" />
               </button>
               <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className={`${deleting && "brightness-75"} rounded-sm bg-delete p-1 transition-all active:scale-95`}
               >
                  <BiTrash className="size-6" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
