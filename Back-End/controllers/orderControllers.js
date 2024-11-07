const Order = require("../models/index").orders;

const addOrders = async (req, res) => {
  const { ...newOrder } = req.body;
  const { user_id, total_price, shipping_type, shipping_address } = newOrder;
  console.log(newOrder);

  const order = await Order.create(newOrder);
  res.json({ message: "Orden Agregado con éxito", data: order });
};

const readOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.status(200).json({ data: orders });
};

const readOrder = async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  res.status(200).json({ data: order });
};

const deleteOrder = async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (!order) {
    return res.status(404).json({ message: "Orden no encontrado" });
  }
  await order.destroy();
  return res
    .status(200)
    .json({ message: "Orden eliminado con exito", data: order });
};

const updateOrder = async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  const { ...newOrder } = req.body;
  if (!order) {
    return res.status(404).json({ message: "orden no encontrado" });
  }
  await order.update(newOrder);
  return res
    .status(200)
    .json({ message: "Orden actualizado con exito", data: order });
};

module.exports = {
  addOrders,
  readOrders,
  readOrder,
  deleteOrder,
  updateOrder,
};
