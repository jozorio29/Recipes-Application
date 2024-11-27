import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormularioReceta from './components/Form/RecipeForm'
import DetallesReceta from './components/RecipeDetails/RecipeDetails'
import Inicio from './components/Home/Home'

const App = () => {
  const [contador, setContador] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/receta/:id" element={<DetallesReceta />} />
          <Route path="/nueva-receta" element={<FormularioReceta />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
