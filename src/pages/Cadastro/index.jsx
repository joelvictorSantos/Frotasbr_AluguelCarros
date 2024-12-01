import React, { useState } from "react"; // Adicionado useState
import { Container, ContainerForm, CenterText, Form, Label, CenterButton, ErrorMessage } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false); // Estado para indicar sucesso no cadastro

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação dos campos
    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Preencha todos os campos corretamente.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    // Preparando o novo usuário para enviar ao db.json
    const novoUsuario = {
      nome,
      email,
      senha,
    };

    try {
      // Enviando os dados do cadastro para o json-server (db.json)
      const response = await fetch('http://localhost:5000/dadosUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
      });

      if (response.ok) {
        console.log('Usuário cadastrado com sucesso!');
        setErro('');
        setSucesso(true); // Marca o sucesso do cadastro

        // Limpar os campos após o cadastro
        setNome('');
        setEmail('');
        setSenha('');
        setConfirmarSenha('');
      } else {
        setErro('Erro ao cadastrar usuário. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setErro('Erro ao cadastrar usuário.');
    }
  };

  if (sucesso) {
    return (
      <Container>
        <ContainerForm>
          <CenterText>
            <h2>Cadastro realizado com sucesso!</h2>
            <p>
              Agora você pode fazer login em sua conta. <Link to="/login">
              <span>Clique aqui para acessar.</span></Link>
            </p>
          </CenterText>
        </ContainerForm>
      </Container>
    );
  }

  return (
    <Container>
      <ContainerForm>
        <CenterText>
          <h2>Crie sua Conta</h2>
          <p>Cadastre-se para alugar os veículos</p>
        </CenterText>
        <Form onSubmit={handleSubmit}>
          <Label>Nome</Label>
          <Input type="text" name="nome" placeholder="Digite seu Nome" value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="Digite seu Email" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <Input type="password" name="senha" placeholder="Digite sua Senha" value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Label>Confirme sua Senha</Label>
          <Input type="password" name="confirmarSenha" placeholder="Digite novamente sua Senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <ErrorMessage className={erro ? 'show' : ''}>{erro}</ErrorMessage>
          <CenterButton>
            <Button type="submit">Cadastrar</Button>
          </CenterButton>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Cadastro;
