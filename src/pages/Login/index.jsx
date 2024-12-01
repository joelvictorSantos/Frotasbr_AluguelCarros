import React, { useState } from "react";
import {
  Container,
  ContainerForm,
  CenterText,
  Form,
  Label,
  CenterButton,
  ErrorMessage,
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { AppAuth } from "../../context/AppAuth";

const Login = () => {
  const auth = AppAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setErro("Preencha todos os campos corretamente.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/dadosUsuario");
      if (!response.ok) {
        throw new Error(`Erro no servidor: ${response.status}`);
      }

      const usuarios = await response.json();
      console.log("Usuários retornados:", usuarios);

      const usuarioValido = usuarios.find(
        (user) => user.email === email && user.senha === senha
      );

      if (usuarioValido) {
        console.log("Login bem-sucedido!");
        setErro("");
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));

        const isAuthenticated = await auth.authenticate(email, senha);
        console.log("Autenticação no contexto:", isAuthenticated);

        if (!isAuthenticated) {
          setErro("Erro ao autenticar via contexto.");
        } else {
          navigate(".././Perfil", { state: { user: usuarioValido } }); // Navega para o dashboard
        }
      } else {
        setErro("Email ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error.message);
      setErro("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <Container>
      <ContainerForm>
        <CenterText>
          <h2>Acesse sua conta</h2>
          <p>Entre com seu e-mail e senha!</p>
        </CenterText>
        <Form onSubmit={handleLogin}>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Digite seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="senha"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <ErrorMessage className={erro ? "show" : ""}>{erro}</ErrorMessage>
          <CenterButton>
            <Button type="submit">Fazer login</Button>
          </CenterButton>
          <CenterText>
            <span>ou</span>
          </CenterText>
          <CenterButton>
            <Link to="/cadastro">
              <Button type="button">Cadastrar</Button>
            </Link>
          </CenterButton>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
