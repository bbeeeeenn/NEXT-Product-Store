import ProductModel from "@/model/product";
import dbConnect from "@/utils/mongodb";

export async function GET() {
   await dbConnect();
   let data = await ProductModel.find();
   return Response.json(data);
}
