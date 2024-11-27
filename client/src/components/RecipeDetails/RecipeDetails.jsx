import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const obtenerReceta = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:8080/api/recetas/${id}`);
        setReceta(respuesta.data);
      } catch (error) {
        console.error('Hubo un error al obtener los detalles de la receta!', error);
      }
    };

    obtenerReceta();
  }, [id]);

  if (!receta) return <div className="text-center mt-5">Cargando...</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{receta.nombre}</h1>
          <div className="card-text">
            <p><strong>Ingredientes:</strong></p>
            <ul>
              {receta.ingredientes.split(',').map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
            <p><strong>Instrucciones:</strong></p>
            <p>{receta.instrucciones}</p>
            <p><strong>Tiempo de Cocción:</strong> {receta.tiempoCoccion} minutos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleReceta;
