import React, { useState, useEffect } from 'react';
import { data } from 'react-router-dom';



const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');         // Valor del input
  const [products, setProducts] = useState([]);            // Resultados a mostrar
  const [message, setMessage] = useState('');              // Mensaje si no hay resultados

  //const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

  // Función para buscar productos
  const searchProducts = async (term) => {
    try {
      const res = await fetch(`http://localhost:2121/api/products/search/${term}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products)
      });
      const data = await res.json();

      if (data.length === 0) {
        setMessage('No se encontraron resultados');
      } else {
        setMessage('');
      }

      setProducts(data);
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };

  // cambios en el input para buscar automáticamente
  useEffect(() => {
    if (searchTerm.trim() !== '') {
      searchProducts(searchTerm);
    } else {
      
      setProducts([data]);
      
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {message && <p>{message}</p>}

      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export {ProductList}
