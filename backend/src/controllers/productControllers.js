import { getProducts } from "../services/productServices";

export const fetchProducts = async(req, res) => {
    try{
        const products = await getProducts(req);
        return res.status(200).json({ status: 200, data: products, message: "Products Fetched Successfully" });
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}