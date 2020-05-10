import { body, check } from "express-validator";

export const placeOrder = () => ([
    body("productID").exists().withMessage("Product is not selected or available"),
    body("name").exists().isLength({ min: 5, max: 25 }).withMessage("name must be above 5 and below 25 letters."),
    body("mobileNumber").exists().isLength({ min: 12, max: 12 }).withMessage("valid mobile number is required"),
    body("address").exists().isLength({ min: 5, max: 100 }).withMessage("location address is required"),
    check("email").exists().isEmail().normalizeEmail().withMessage("valid email address is required"),
]);