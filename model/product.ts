import { Schema, SchemaTypes, model, models } from "mongoose";

const productSchema = new Schema(
   {
      name: {
         type: SchemaTypes.String,
         required: true,
      },
      price: {
         type: SchemaTypes.Number,
         required: true,
      },
      imgSrc: {
         type: SchemaTypes.String,
      },
   },
   { timestamps: true },
);

export default models.Product || model("Product", productSchema);
