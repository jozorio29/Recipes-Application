import cors  from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import router from './routes/recipes.routes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGODB_URI;

if(!mongoURI) {
    throw new Error('Falta la variable de entorno MONGODB_URI');
}

app.use(express.json());
app.use(cors());
app.use('/api', router);


mongoose.connect(mongoURI)
.then(() => {
    console.log('Conectado a la base de datos');
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));


