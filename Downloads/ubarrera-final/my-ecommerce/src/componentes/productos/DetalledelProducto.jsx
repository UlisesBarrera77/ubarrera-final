import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductoById } from '../../api';
import './productos.css';

function DetalleProducto() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductoById(id);
        setProducto(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener detalles del producto", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <h2>Detalle del Producto</h2>
        <p>Nombre: {producto.name}</p>
        <p>Precio: ${producto.price}</p>
        <p>Stock: {producto.stock}</p>
        <p>Código: {producto.codigo}</p>
        <p>Descripción: {producto.description}</p>
        <img src={producto.image} alt={producto.name} />
      </div>
    );
  }
}

export default DetalleProducto;