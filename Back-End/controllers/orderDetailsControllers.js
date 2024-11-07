const OrderDetails = require("../models/index").orderDetails;

const { validateAddedOrderDetails } = require("../middlewares/orderDetailsValidations");

// Crear un detalle de orden
 

const addOrderDetail = async (req, res) => {
  const { order_id, product_id, quantity, price } = req.body;

  try {

    const usuario = await OrderDetails.create({
      order_id,
      product_id,
      quantity,
      price,
    });

    res.status(201).json({
      message: "Detalle de orden agregado con éxito",
      data: usuario,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al agregar el detalle de orden",
      error: error.message,
    });
  }
};

// Leer todos los detalles de orden
const readOrderDetails = async (req, res) => {
  try {
    const orderDetails = await OrderDetails.findAll();
    res.status(200).json({ data: orderDetails });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los detalles de orden", error: error.message });
  }
};

// Leer un detalle de orden específico por ID
const readOrderDetail = async (req, res) => {
  try {
    const orderDetail = await OrderDetails.findByPk(req.params.id);
    if (!orderDetail) {
      return res.status(404).json({ message: "Detalle de orden no encontrado" });
    }
    res.status(200).json({ data: orderDetail });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el detalle de orden", error: error.message });
  }
};

// Actualizar un detalle de orden
const updateOrderDetail = async (req, res) => {
  try {
    const orderDetail = await OrderDetails.findByPk(req.params.id);
    if (!orderDetail) {
      return res.status(404).json({ message: "Detalle de orden no encontrado" });
    }

    const { order_id, product_id, quantity, price } = req.body;
    await orderDetail.update({ order_id, product_id, quantity, price });

    res.status(200).json({ message: "Detalle de orden actualizado con éxito", data: orderDetail });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el detalle de orden", error: error.message });
  }
};

// Eliminar un detalle de orden
const deleteOrderDetail = async (req, res) => {
  try {
    const orderDetail = await OrderDetails.findByPk(req.params.id);
    if (!orderDetail) {
      return res.status(404).json({ message: "Detalle de orden no encontrado" });
    }

    await orderDetail.destroy();
    res.status(200).json({ message: "Detalle de orden eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el detalle de orden", error: error.message });
  }
};

module.exports = {
  addOrderDetail,
  validateAddedOrderDetails,
  readOrderDetails,
  readOrderDetail,
  updateOrderDetail,
  deleteOrderDetail,
};
