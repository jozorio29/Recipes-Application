import Receta from '../models/recipes.model.js';

const crearRecetas =  async (req, res) => {

    try {
        const receta = new Receta(req.body);
        await receta.save();
        res.status(201).json({ message: 'Receta creada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la receta' });
    }
}

const obtenerTodasLasRecetas = async (req, res) => {
    try {
      const recetas = await Receta.find();
      res.status(200).json(recetas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener recetas' });
    }
  }

  const obtenerRecetasPorId = async (req, res) => {
    try {
      const receta = await Receta.findById(req.params.id);
      if (!receta) return res.status(404).json({ message: 'Receta no encontrada' });
      res.status(200).json(receta);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la receta' });
    }
  };

const eliminarRecetas = async (req, res) => {
    try {
        const receta = await Receta.findByIdAndDelete(req.params.id);
        if (!receta) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }
        res.status(200).json({ message: 'Receta eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la receta' });
    }
}


export { crearRecetas, obtenerTodasLasRecetas, obtenerRecetasPorId, eliminarRecetas }