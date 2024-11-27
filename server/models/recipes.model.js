import mongoose from 'mongoose';

const recetaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ingredientes: { type: String, required: true },
    instrucciones: { type: String, required: true },
    tiempoCoccion: { type: Number, required: true },
});

const Receta = mongoose.model('Receta', recetaSchema);

export default Receta;