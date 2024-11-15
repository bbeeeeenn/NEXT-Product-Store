"use client";
import ProductCard from "@/app/components/productCard";
import { useEffect, useState } from "react";

export default function Home() {
   const [products, setProducts] = useState<any[]>([]);
   const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/api/products/get");
      const data = await res.json();
      setProducts(data);
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
         <div className="mt-5 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {products ? (
               products.map((product: any) => (
                  <ProductCard
                     key={product._id}
                     id={product._id.toString()}
                     name={product.name}
                     price={product.price}
                     imgSrc={product.imgSrc}
                  />
               ))
            ) : (
               <></>
            )}
         </div>
      </>
   );
}
