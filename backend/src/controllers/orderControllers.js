import { placeOrder } from "../services/orderServices";
import { validationResult } from "express-validator/check";

export const placeOrderController = async(req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const orderDetails = await placeOrder(req);
        return res.status(200).json({ status: 200, data: orderDetails, message: "Order Placed Successfully" });
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}