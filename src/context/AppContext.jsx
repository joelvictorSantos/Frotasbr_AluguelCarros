import React, { useState, useEffect, createContext } from 'react';
import { loginUsuario, cadastrarUsuario, adicionarVeiculoAoUsuario } from '../services/Api';

import { setLocalStorage, getLocalStorage } from './Utils';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Recupera o usuário do localStorage ao carregar a aplicação
  useEffect(() => {
    const storedUser = getLocalStorage();
    if (storedUser) {
      setUser(storedUser);
      console.log('Usuário logado:', storedUser);
    }
  }, []);

  // Função para autenticar o usuário
  const authenticate = async (email, senha) => {
    try {
      const usuario = await loginUsuario(email, senha);
      const userPayload = {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
        dadosVeiculos: usuario.dadosVeiculos || [], // Use a mesma chave do database.json
      };
  
      setUser(userPayload);
      setLocalStorage(userPayload);
  
      console.log("Autenticação bem-sucedida:", userPayload);
      window.location.href = "/perfil";
      return true;
    } catch (error) {
      console.error("Erro na autenticação:", error.message);
      return false;
    }
  };
  

  // Função para registrar um novo usuário
  const register = async (usuario) => {
    try {
      const novoUsuario = await cadastrarUsuario(usuario);

      const userPayload = {
        id: novoUsuario.id,
        email: novoUsuario.email,
        nome: novoUsuario.nome,
      };

      setUser(userPayload);
      setLocalStorage(userPayload);

      console.log('Cadastro bem-sucedido:', userPayload);
      return true;
    } catch (error) {
      console.error('Erro no registro:', error.message);
      return false;
    }
  };

  // Função para registrar um veículo
 

  const addVehicle = async (veiculo) => {
    if (!user) return false;
  
    try {
      const updatedUser = await adicionarVeiculoAoUsuario(user.id, veiculo);
  
      setUser(updatedUser); // Atualiza o estado local com os dados retornados do servidor
      setLocalStorage(updatedUser); // Atualiza o localStorage com os novos dados
      console.log("Veículo adicionado:", veiculo);
  
      return true;
    } catch (error) {
      console.error("Erro ao adicionar veículo:", error.message);
      return false;
    }
  };
  

  // Função para fazer logout
  const logout = () => {
    setUser(null);
    setLocalStorage(null);
    console.log('Usuário deslogado');
  };

  return (
    <AppContext.Provider value={{ user, authenticate, register, addVehicle, logout }}>
      {children}
    </AppContext.Provider>
  );
};
