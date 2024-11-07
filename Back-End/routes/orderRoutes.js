const express = require("express");
const {
    addOrders,
    readOrders,
    readOrder,
    deleteOrder,
    updateOrder,
} = require("../controllers/orderControllers");
const { validateAddedOrders, validateUpdatedOrders } = require("../middlewares/orderValidations");
const router = express();
router.post("/", validateAddedOrders, addOrders);
router.get("/", readOrders);
router.get("/:id", readOrder);
router.put("/:id", validateUpdatedOrders, updateOrder);
router.delete("/:id", deleteOrder);
module.exports = router;