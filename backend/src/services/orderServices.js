import { Orders } from "../models/orderModel";

export const placeOrder = async (req) => {
    const order = await Orders.create(req.body);
    return order;
}