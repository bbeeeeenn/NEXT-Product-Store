import type { Metadata } from "next";
import "./globals.css";
import { BiBrightness, BiPlusCircle } from "react-icons/bi";
import Link from "next/link";
import CreateButton from "@/app/components/createbtn";

export const metadata: Metadata = {
   title: "Product Store",
   // description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="select-none bg-slate-900">
            <header>
               <nav className="flex h-16 items-center justify-between px-14 py-10">
                  <Link href={"/"}>
                     <h1 className="font bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
                        Product Store🛒
                     </h1>
                  </Link>

                  <div className="flex items-center justify-center gap-4 text-slate-200">
                     <CreateButton />
                     <button className="aspect-square h-10 rounded-md bg-slate-800">
                        <BiBrightness className="m-auto size-7" />
                     </button>
                  </div>
               </nav>
            </header>
            <main className="px-20 pb-5 sm:px-10">{children}</main>
         </body>
      </html>
   );
}
