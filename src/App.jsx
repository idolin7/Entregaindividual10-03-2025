import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./database/authcontext";
import ProtectedRoute from "./components/ProtectedRoute"; 
import Login from './views/Login'
import Encabezado from "./components/Encabezado";
import Inicio from "./views/Inicio";
import Categorias from "./views/categorias";// importacion de categorias
import Productos from "./views/Productos";

import './App.css'
import Catalogo from "./views/catalogo";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
            <Encabezado />
            <main>
            <Routes>
                
                <Route path="/" element={<Login />} />
                <Route path="/inicio" element={<ProtectedRoute element={<Inicio />} />} />
                <Route path="/categorias" element={<ProtectedRoute element={<Categorias />} />}/> //Ruta de Categorias protegida
                <Route path="/productos" element={<ProtectedRoute element={<Productos />} />}/>
                <Route path="/catalogo" element={<ProtectedRoute element={<Catalogo />} />}/>
              </Routes>
            </main>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App

