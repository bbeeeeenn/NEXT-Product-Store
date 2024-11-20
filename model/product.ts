import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      imgSrc: {
         type: String,
      },
   },
   { timestamps: true },
);

export default models.Product || model("Product", productSchema);
