import ProductModel from "@/model/product";
import ReservedProducts from "@/sample-products.json";

export async function GET() {
   for (const product of ReservedProducts) {
      const newProduct = new ProductModel(product);
      await newProduct.save();
   }
   return Response.json({ msg: "Inserted reserved products." });
}
