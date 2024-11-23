import Product from "@/model/product";

export async function PUT(req: Request) {
   try {
      const body = await req.json();
      const { id, name, price, imgSrc } = body;
      const product = await Product.findOne({ _id: id });
      if (!product) return Response.json({ error: "Product not found." });

      product.name = name;
      product.price = price;
      product.imgSrc = imgSrc;
      await product.save();

      return Response.json({ msg: "Updated" });
   } catch (error) {
      if (error instanceof Error) {
         return Response.json(error.message);
      }
      return Response.json(error);
   }
}
