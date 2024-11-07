const Product = require("../models/index").productos;

const addProducts = async (req, res) => {
  const { ...newProduct } = req.body;
  const { nombre, descripcion, precio, categoria, url } = newProduct;
  console.log(newProduct);
  if (!nombre || !descripcion || !precio || !categoria || !url) {
    return res.status(500).json({ message: "Debes ingresar un producto" });
  }
  const product = await Product.create(newProduct);
  res.json({ message: "Agregado con éxito", data: product });
};

const readProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json({ data: products });
};

const readProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.status(200).json({ data: product });
};

const deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "producto no encontrado" });
  }
  await product.destroy();
  return res
    .status(200)
    .json({ message: "Producto eliminado con exito", data: product });
};

const updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  const { ...newProduct } = req.body;
  if (!product) {
    return res.status(404).json({ message: "producto no encontrado" });
  }
  await product.update(newProduct);
  return res
    .status(200)
    .json({ message: "Producto actualizado con exito", data: product });
};

module.exports = {
  addProducts,
  readProducts,
  readProduct,
  deleteProduct,
  updateProduct,
};
