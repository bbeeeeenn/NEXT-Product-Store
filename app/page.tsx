"use client";
import ProductCard from "@/app/components/productCard";
import { useEffect, useState } from "react";
import Link from "next/link";

type product = { _id: any; name: string; price: number; imgSrc: string };

export default function Home() {
   const [products, setProducts] = useState<product[]>([]);
   const [filling, setFilling] = useState(false);
   const [fetching, setFetching] = useState(true);
   const fetchProducts = async () => {
      const res = await fetch("/api/products/get");
      const data = await res.json();
      setProducts(data);
      setFetching(false);
   };

   const handleFillClick = async () => {
      setFilling(true);
      await fetch("/api/products/fill");
      setTimeout(setFilling, 5000, false);
   };

   useEffect(() => {
      fetchProducts();
      const interval = setInterval(fetchProducts, 3000);
      return () => clearInterval(interval);
   }, []);

   return (
      <>
         <h1 className="font bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-center text-2xl font-extrabold text-transparent">
            Products
         </h1>
         {fetching ? (
            <div className="absolute inset-0 m-auto aspect-square h-1 font-bold tracking-widest text-white">
               Loading...
            </div>
         ) : products.length == 0 ? (
            <div className="mt-20 flex flex-col items-center">
               <p className="text-center font-bold tracking-widest text-white">
                  No Products Posted
               </p>
               <button
                  onClick={handleFillClick}
                  disabled={filling}
                  className={`${filling ? "brightness-50" : ""} mx-2 mt-10 rounded-sm bg-emerald-400 px-2 font-bold transition-transform active:scale-95 sm:mt-5`}
               >
                  {filling ? "Waiting..." : "Auto Fill"}
               </button>
               <Link
                  href="/create"
                  className="mx-2 mt-3 rounded-sm bg-blue-800 px-3 py-2 text-xl font-bold text-slate-200 transition-transform active:scale-95"
               >
                  Create New
               </Link>
            </div>
         ) : (
            <div className="mt-5 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
               {products
                  .map((product: product) => (
                     <ProductCard
                        key={product._id}
                        id={product._id.toString()}
                        name={product.name}
                        price={product.price}
                        imgSrc={product.imgSrc}
                        setProducts={setProducts}
                     />
                  ))
                  .reverse()}
            </div>
         )}
      </>
   );
}
