# Recipes-Application

### Descripción

Este proyecto es una aplicación para la gestión y visualización de recetas. Permite a los usuarios explorar recetas, interactuar con su contenido y manejar información relacionada. El proyecto está desarrollado con una arquitectura full stack utilizando las siguientes tecnologías:

- Frontend: React con Bootstrap.

- Backend: Node.js y Express.

- Base de Datos: MongoDB, gestionada con Mongoose.

# Características

### Frontend

- Construido con React y Vite para un rendimiento rápido.

- Uso de React Router DOM para la navegación entre páginas.

- Formularios validados con Formik y Yup.

- Diseño responsivo utilizando Bootstrap y React Bootstrap.

- Manejo de solicitudes HTTP con Axios.

### Backend

- API RESTful creada con Express.

- Conexión a base de datos MongoDB usando Mongoose.

- Manejo de CORS con la biblioteca cors.

- Variables de entorno gestionadas con dotenv.

## Estructura del Proyecto

### Frontend

```
client/
|-- src/
|   |-- components/
|   |   |-- RecipeList.jsx
|   |-- App.jsx
|   |-- index.jsx
|-- package.json
```

### Backend

```
server/
|-- config/
|-- controllers/
|-- models/
|-- routes/
|-- server.js
|-- .env
|-- package.json
```

# Instalación y Ejecución

## Requisitos Previos

- Node.js instalado.

- MongoDB configurado y en ejecución.

1. Clonar el repositorio:

```
git clone <URL_DEL_REPOSITORIO>
```

2. Configurar el Frontend:

```
cd client
npm install
```

3. Configurar el Backend:

```
cd server
npm install
```

4. Crear un archivo .env en el directorio del backend basado en el ejemplo:

```
MONGO_URI=mongodb://localhost:27017/tu_base_de_datos
PORT=5000
```

5. Iniciar el proyecto:

- Frontend:

```
npm run dev
```

- Backend:

```
npm run dev
```

## Scripts Disponibles

### Frontend

- npm run dev: Inicia el servidor de desarrollo con Vite.

- npm run build: Construye la aplicación para producción.

- npm run preview: Visualiza la aplicación construida.

### Backend

- npm start: Inicia el servidor en modo producción.

- npm run dev: Inicia el servidor en modo desarrollo con nodemon.

## Tecnologías Utilizadas

### Frontend

- React

- Bootstrap

- Formik

- Yup

- Axios

- React Router Dom

### Backend

- Node.js

- Express

- Mongoose

- dotenv

- Cors

# Contribución

Las contribuciones son bienvenidas. Para reportar errores o sugerir mejoras, abre un issue en el repositorio.

**Desarrollado por:** José Ozorio
