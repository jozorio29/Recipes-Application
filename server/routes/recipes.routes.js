import express from 'express';
import { obtenerTodasLasRecetas, obtenerRecetasPorId, crearRecetas, eliminarRecetas } from '../controllers/recipes.controller.js';


const router = express.Router();

router.get('/recetas', obtenerTodasLasRecetas); 
router.get('/recetas/:id', obtenerRecetasPorId); 
router.post('/recetas', crearRecetas); 
router.delete('/recetas/:id', eliminarRecetas);

export default router;