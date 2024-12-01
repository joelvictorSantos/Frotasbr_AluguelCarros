import React from "react";
import { Navigate } from "react-router-dom";

// Função para verificar autenticação
const isAuthenticated = () => {
  const user = localStorage.getItem("Users");
  return user !== null; // Verifica se o usuário está salvo no localStorage
};

const PrivateRoute = ({ children }) => {
  // Se não estiver autenticado, redireciona para login
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  // Renderiza o conteúdo se autenticado
  return children;
};

export default PrivateRoute;
