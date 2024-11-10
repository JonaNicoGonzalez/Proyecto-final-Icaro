import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from '../api/api';
import '../css/ProductList.css';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch(`${API_URL}/api/productos`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list-container">
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.url}
                alt={product.nombre}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.nombre}</h3>
                <p>{product.descripcion}</p>
                <p><strong>Precio:</strong> ${product.precio}</p>
                <p><strong>Categoría:</strong> {product.categoria}</p>
                <Link to={`/editar-producto/${product.id}`}>
                    <button className="edit-button">Editar</button>
                </Link>
                <Link to={`/delete-product/${product.id}`}>
                      <button className="delete-button">Eliminar</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
