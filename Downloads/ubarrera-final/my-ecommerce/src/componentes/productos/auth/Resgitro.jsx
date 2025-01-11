import React, { useState } from 'react';

function Registro() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el registro
    console.log(form);
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>
        <label>
          Confirmar Contraseña:
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;