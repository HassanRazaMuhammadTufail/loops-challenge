import { Schema, Document, model, Mongoose } from "mongoose";

const OrderSchema = new Schema({
    productID: { type: Schema.Types.ObjectId, ref:"Products" },
    name: { type: String },
    mobileNumber: { type: String },
    address: { type: String },
    email: { type: String }
});

export const Orders = model("Orders", OrderSchema)