import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './componentes/menu/Menu';
import ListaProductos from './componentes/productos/ListaProductos';
import DetalleProducto from './componentes/productos/DetalleProducto';
import Registro from './componentes/auth/Registro';
import Login from './componentes/auth/Login';
import './App.css';

function App() {
  return (
    <div className="container">
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;