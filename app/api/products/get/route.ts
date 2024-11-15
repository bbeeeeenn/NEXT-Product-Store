import ProductModel from "@/model/product";
import dbConnect from "@/utils/mongodb";
export async function GET() {
   await dbConnect();
   return Response.json(await ProductModel.find());
}
