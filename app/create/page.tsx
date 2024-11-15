"use client";
import React, { useState } from "react";

const CreatePage = () => {
   const [formData, setFormData] = useState({
      name: "",
      price: "",
      imgSrc: "",
   });
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name === "price" && isNaN(Number(value))) return;
      setFormData({ ...formData, [name]: value });
      console.log(name, value);
   };
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
   };
   return (
      <>
         <h1 className="font bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-center text-2xl font-extrabold text-transparent">
            Create New Product
         </h1>
         <div className="mt-4 flex justify-center">
            <form onSubmit={handleSubmit}>
               <input
                  className="block"
                  type="text"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
               />
               <input
                  className="block"
                  type="text"
                  value={formData.price}
                  name="price"
                  min={0}
                  onChange={handleChange}
               />
               <input
                  className="block"
                  type="text"
                  value={formData.imgSrc}
                  name="imgSrc"
                  onChange={handleChange}
               />
               <button
                  type="submit"
                  className="rounded-md bg-slate-700 px-7 py-2 font-bold"
               >
                  Create
               </button>
            </form>
         </div>
      </>
   );
};

export default CreatePage;
