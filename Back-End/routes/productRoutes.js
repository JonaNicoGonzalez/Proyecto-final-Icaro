const express = require("express");
const {
  addProducts,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const { validateAddedProducts, validateUpdatedProducts } = require("../middlewares/productValidations");
const router = express();
router.post("/", validateAddedProducts, addProducts);
router.get("/", readProducts);
router.get("/:id", readProduct);
router.put("/:id", validateUpdatedProducts, updateProduct);
router.delete("/:id", deleteProduct);
module.exports = router;