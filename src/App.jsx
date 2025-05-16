import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Personajes from './pages/personajes/Personajes'
import Transformaciones from './pages/transformaciones/Transformaciones'
import DetallePersonajes from './pages/personajes/DetallePersonajes'
import DetallePlaneta from './pages/planetas/DetallePlaneta'

const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
       
          <Routes>
            <Route path="/" element={<Personajes />} /> 
             <Route path="/personajes" element={<Personajes />} /> 
             <Route path="/detallepersonajes/:id" element={<DetallePersonajes />} /> 

            <Route path="/transformaciones" element={<Transformaciones />} /> 


            <Route path="/detallePlaneta/:id/:nombre" element={<DetallePlaneta />} /> 
    

            <Route path="*" element={<Personajes />} /> 
          </Routes>
       
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App