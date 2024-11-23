"use client";
import React, { ChangeEvent, useRef, useState } from "react";

const EditDialog = ({
   data,
   setEditing,
}: {
   data: { name: string; price: number; imgSrc: string };
   setEditing: any;
}) => {
   const form = useRef(null);
   // States
   const [fetching, setFetching] = useState(false);
   const [product, setProduct] = useState({ ...data });

   // Functions
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFetching(true);
      await fetch("/api/products/edit", {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(product),
      });

      setEditing(false);
   };

   const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const formTarget = form.current as HTMLFormElement;
      if (!formTarget.contains(e.target as Node)) {
         // Close the dialog
         setEditing(false);
      }
   };

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "price" && isNaN(Number(e.target.value))) return;
      setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   return (
      <div
         onClick={handleOutsideClick}
         className="fixed inset-0 z-10 m-auto flex items-start justify-center bg-background/50"
      >
         <form
            ref={form}
            onSubmit={handleSubmit}
            className="mt-20 w-11/12 rounded-md bg-secondary p-5 shadow-lg sm:w-4/6 md:w-3/6"
         >
            <input
               className="my-2 block w-full cursor-pointer rounded-md bg-input px-5 py-2 font-bold text-textclr transition-transform focus:outline-none active:scale-y-90 active:opacity-90"
               type="text"
               required
               autoComplete="off"
               placeholder="Name"
               value={product.name}
               name="name"
               onChange={handleInputChange}
            />

            <input
               className="my-2 block w-full cursor-pointer rounded-md bg-input px-5 py-2 font-bold text-textclr transition-transform focus:outline-none active:scale-y-90 active:opacity-90"
               type="text"
               required
               autoComplete="off"
               placeholder="Price"
               value={product.price}
               name="price"
               onChange={handleInputChange}
            />
            <input
               className="my-2 block w-full cursor-pointer rounded-md bg-input px-5 py-2 font-bold text-textclr transition-transform focus:outline-none active:scale-y-90 active:opacity-90"
               type="url"
               autoComplete="off"
               placeholder="Optional: Image URL"
               value={product.imgSrc}
               name="imgSrc"
               onChange={handleInputChange}
            />
            <button
               type="submit"
               className={`${fetching && "hidden"} rounded-md bg-blue-900 px-7 py-2 font-bold text-blue-100 active:scale-95`}
            >
               Update
            </button>
         </form>
      </div>
   );
};

export default EditDialog;
