export const fetchProductos = async () => {
    const BASE_URL = 'https://api.tienda.com/productos'; // Reemplaza con la URL de tu API
    
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener los productos", error);
      throw error;
    }
  }
  
  export const fetchProductoById = async (id) => {
    try {
      const response = await fetch(`https://api.tienda.com/productos/${id}`); // Reemplaza con la URL de tu API
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el producto", error);
      throw error;
    }
  }