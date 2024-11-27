import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const ListaRecetas = ({ recetas, eliminarReceta }) => (
  <div className="container mt-4">
    <h2 className="mb-4">Lista de Recetas</h2>
    <ul className="list-group">
      {recetas.length > 0 ? (
        recetas.map(receta => (
          <li key={receta._id} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/receta/${receta._id}`} className="text-decoration-none">
              {receta.nombre}
            </Link>
            <div>
              <span className="badge bg-primary rounded-pill me-2">{receta.tiempoCoccion} min</span>
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => eliminarReceta(receta._id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="list-group-item text-center text-muted">No hay recetas disponibles</li>
      )}
    </ul>
  </div>
);

export default ListaRecetas;
