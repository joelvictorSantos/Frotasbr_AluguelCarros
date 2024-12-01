import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; // Usando a estrutura atualizada do React Router v6+

import Header from "../components/Header";
import Home from "../pages/Home";
import Managem from "../pages/Managem";
import ManagemCard from "../components/Card/ManagemCard";
import FrotasBr from "../pages/FrotasBr";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Perfil from "../pages/Perfil";
import Error from "../pages/Error";
import Footer from "../components/Footer";
import PrivateRoute from "../components/PrivateRoute";


const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/managem" element={<Managem />} />
        <Route path="/cardmanagem" element={<ManagemCard />} />
        <Route path="/frotasbr/:slug" element={<FrotasBr />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element=
        {
          <PrivateRoute>
          <Perfil />
          </PrivateRoute>
        } />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterApp;
