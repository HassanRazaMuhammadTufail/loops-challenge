import * as Express from "express";
const router = Express.Router();
import * as controllers from "../controllers";
import * as validate from "../validations";


router.post("/",validate.placeOrder(),controllers.placeOrderController);
router.get("/",controllers.fetchProducts);

module.exports = router;