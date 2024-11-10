
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from '../api/api';
// import '../css/DeleteProduct.css';

function DeleteProduct() {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const navigate = useNavigate(); // Para redirigir después de la eliminación
    const [product, setProduct] = useState(null);

    // Cargar los datos del producto por ID cuando se monte el componente
    useEffect(() => {
        fetch(`${API_URL}/api/productos/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data.data))
            .catch(error => console.error('Error al cargar el producto:', error));
    }, [id]);

    // Manejar la eliminación del producto
    const handleDelete = () => {
        fetch(`${API_URL}/api/productos/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log('Producto eliminado');
                navigate('/product-list'); // Redirigir a la lista de productos después de eliminar
            } else {
                console.error('Error al eliminar el producto');
            }
        })
        .catch(error => console.error('Error al eliminar el producto:', error));
    };

    if (!product) return <p>Cargando producto...</p>;

    return (
        <div className="delete-product">
            <h2>Eliminar Producto</h2>
            <div className="product-details">
                <p><strong>Nombre:</strong> {product.nombre}</p>
                <p><strong>Descripción:</strong> {product.descripcion}</p>
                <p><strong>Precio:</strong> ${product.precio}</p>
                <p><strong>Categoría:</strong> {product.categoria}</p>
            </div>
            <button onClick={handleDelete} className="delete-button">Eliminar Producto</button>
        </div>
    );
}

export default DeleteProduct;
