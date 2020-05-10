import { Products } from "../models/productModel";

export const getProducts = async() => {
    const products = await Products.find().lean();
    return products;
}