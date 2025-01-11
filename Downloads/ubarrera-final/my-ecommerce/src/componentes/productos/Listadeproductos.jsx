import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductos } from '../../api';
import './productos.css';

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductos();
        setProductos(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul className="productos-lista">
          {productos.map((producto) => (
            <li key={producto.id} className="producto-item">
              <h3>{producto.name}</h3>
              <p>Precio: ${producto.price}</p>
              <p>Stock: {producto.stock}</p>
              <p>Código: {producto.codigo}</p>
              <Link to={`/producto/${producto.id}`}>Ver Detalle</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaProductos;