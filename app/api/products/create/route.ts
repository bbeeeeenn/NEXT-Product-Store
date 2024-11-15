import dbConnect from "@/utils/mongodb";
import Product from "@/model/product";

export async function POST(req: Request) {
   await dbConnect();
   const product = await req.json();
   try {
      const newProduct = new Product(product);
      await newProduct.save();
      return Response.json(newProduct);
   } catch (error) {
      if (error instanceof Error) {
         return Response.json({ error: error.message });
      } else {
         return Response.json({ error: "An unknown error occurred" });
      }
   }
}
