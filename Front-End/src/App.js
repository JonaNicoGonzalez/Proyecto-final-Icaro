// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct'; 


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">|| Login || </Link>
          <Link to="/register">Crear Usuario || </Link>
          <Link to="/add-product">Agregar Producto || </Link>
          <Link to="/product-list">Listar Productos || </Link>
        </nav>
        
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/editar-producto/:id" element={<EditProduct />} /> 
            <Route path="/delete-product/:id" element={<DeleteProduct />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
