// src/components/AddProduct.js

import React, { useState } from 'react';
import { API_URL } from '../api/api';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    url: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${API_URL}/api/productos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Producto agregado exitosamente');
        setProductData({ nombre: '', descripcion: '', precio: '', categoria: '', url: '' });
      } else {
        setError(data.message || 'Error al agregar el producto');
      }
    } catch (error) {
      setError('Hubo un error en la conexión al servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={productData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={productData.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={productData.precio}
            onChange={handleChange}
            required
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoría:</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={productData.categoria}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="url">URL de la Imagen:</label>
          <input
            type="url"
            id="url"
            name="url"
            value={productData.url}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Agregando...' : 'Agregar Producto'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default AddProduct;
