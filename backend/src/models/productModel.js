import { Schema, Document, model } from "mongoose";

const ProductsSchema = new Schema({
  type: { type: String },
  size: { type: String },
  price: { type: Number },
  color: { type: String },
  image: { type: String }
});

export const Products = model("Products",ProductsSchema)