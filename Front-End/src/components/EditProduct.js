import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from '../api/api';
import '../css/EditProduct.css';

function EditProduct() {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const navigate = useNavigate(); // Para redirigir después de la edición
    const [product, setProduct] = useState({
      nombre: '',
      descripcion: '',
      precio: '',
      categoria: '',
      url: ''
    });
  
    // Cargar los datos del producto por ID cuando se monte el componente
    useEffect(() => {
        fetch(`${API_URL}/api/productos/${id}`)
          .then(response => response.json())
          .then(data => setProduct(data.data))
          .catch(error => console.error('Error al cargar el producto:', error));
      }, [id]);
  
    // Manejar el cambio de los inputs
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    };
  
    // Manejar el envío del formulario para actualizar el producto
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`${API_URL}/api/productos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Producto actualizado:', data);
          navigate('/product-list'); // Redirigir a la lista de productos
        })
        .catch(error => console.error('Error al actualizar el producto:', error));
    };
  
    return (
      <div className="edit-product">
        <h2>Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={product.nombre}
              onChange={handleChange}
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="descripcion"
              value={product.descripcion}
              onChange={handleChange}
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              name="precio"
              value={product.precio}
              onChange={handleChange}
            />
          </label>
          <label>
            Categoría:
            <input
              type="text"
              name="categoria"
              value={product.categoria}
              onChange={handleChange}
            />
          </label>
          <label>
            URL de la Imagen:
            <input
              type="text"
              name="url"
              value={product.url}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    );
  }
  
  export default EditProduct;
