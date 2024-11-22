"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CreatePage = () => {
   const router = useRouter();
   const [fetching, setFetching] = useState(false);
   const [formData, setFormData] = useState({
      name: "",
      price: "",
      imgSrc: "",
   });
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name === "price" && isNaN(Number(value))) return;
      setFormData({ ...formData, [name]: value });
   };
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFetching(true);
      try {
         const response = await fetch(`/api/products/create`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });
         const data = await response.json();
         // console.log(data);
         if (data.error) {
            setFetching(false);
            return;
         }
         router.push("/");
      } catch (error) {
         console.error(error);
         setFetching(false);
         alert("Something went wrong!");
      }
   };

   useEffect(() => {
      document.title = "Create Product";
   }, []);
   return (
      <>
         <h1 className="font bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-center text-2xl font-extrabold text-transparent">
            Create New Product
         </h1>
         <div className="mt-4 flex justify-center">
            <form
               onSubmit={handleSubmit}
               className="w-full rounded-md bg-secondary p-5 shadow-lg sm:w-4/6 md:w-3/6"
            >
               <input
                  className="my-2 block w-full cursor-pointer rounded-md bg-input px-5 py-2 font-bold text-textclr transition-transform focus:outline-none active:scale-y-90 active:opacity-90"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="Name"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
               />

               <input
                  className="my-2 block w-full cursor-pointer rounded-md bg-input px-5 py-2 font-bold text-textclr transition-transform focus:outline-none active:scale-y-90 active:opacity-90"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="Price"
                  value={formData.price}
                  name="price"
                  min={0}
                  onChange={handleChange}
               />
               <input
                  className="my-2 block w-full cursor-pointer rounded-md bg-input px-5 py-2 font-bold text-textclr transition-transform focus:outline-none active:scale-y-90 active:opacity-90"
                  type="url"
                  autoComplete="off"
                  placeholder="Optional: Image URL"
                  value={formData.imgSrc}
                  name="imgSrc"
                  onChange={handleChange}
               />
               <button
                  disabled={fetching}
                  type="submit"
                  className={`${fetching && "hidden"} rounded-md bg-blue-900 px-7 py-2 font-bold text-blue-100 active:scale-95`}
               >
                  Create
               </button>
            </form>
         </div>
      </>
   );
};

export default CreatePage;
