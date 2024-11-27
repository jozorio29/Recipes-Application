import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListaRecetas from '../List/RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/recetas');
        setRecetas(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('¡Hubo un error al obtener las recetas!', error);
        setRecetas([]); // Aseguramos que `recetas` sea un arreglo en caso de error
      }
    };

    fetchRecetas();
  }, []);

  const eliminarReceta = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/recetas/${id}`);
      setRecetas(recetas.filter(receta => receta._id !== id));
    } catch (error) {
      console.error('¡Hubo un error al eliminar la receta!', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-4">Colección de Recetas</h1>
        <Link to="/nueva-receta" className="btn btn-primary">
          Agregar Nueva Receta
        </Link>
      </div>
      <ListaRecetas recetas={recetas} eliminarReceta={eliminarReceta} />
    </div>
  );
};

export default Inicio;
