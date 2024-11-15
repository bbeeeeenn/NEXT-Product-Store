import ProductModel from "@/model/product";
import dbConnect from "@/utils/mongodb";

export async function DELETE(req: Request) {
   await dbConnect();
   const { id } = await req.json();
   if (!id) return Response.json({ error: "'id' undefined" });
   try {
      await ProductModel.findByIdAndDelete(id);
      return Response.json({ message: "Deleted" });
   } catch (error) {
      if (error instanceof Error) {
         return Response.json({ error: error.message });
      }
      return Response.json(error);
   }
}
