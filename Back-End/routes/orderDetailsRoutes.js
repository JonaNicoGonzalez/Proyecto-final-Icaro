const express = require("express");
const {
    addOrderDetail,
    readOrderDetails,
    readOrderDetail,
    deleteOrderDetail,
    updateOrderDetail,
} = require("../controllers/orderDetailsControllers");
const { validateAddedOrderDetails, validateUpdatedOrderDetails } = require("../middlewares/orderDetailsValidations");
const router = express();
router.post("/", validateAddedOrderDetails, addOrderDetail);
router.get("/", readOrderDetails);
router.get("/:id", readOrderDetail);
router.put("/:id", validateUpdatedOrderDetails, updateOrderDetail);
router.delete("/:id", deleteOrderDetail);
module.exports = router;