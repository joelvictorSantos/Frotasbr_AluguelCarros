import React from "react";
import { AppAuth } from "../../context/AppAuth"; // Acessa o contexto da aplicação
import { 
  Container, 
  ProfileImg, 
  ProfileContainer, 
  ProfileItems, 
  SolicitationContainer, 
  Solicitation, 
  Message, 
  VehicleImage,
  Title
} from "./styles";
import Cars from "../../cardata/Cars"; // Importa os dados dos carros para buscar informações adicionais

const Perfil = () => {
  const { user } = AppAuth(); // Obtém o usuário do contexto

  return (
    <Container>
      {/* Informações do perfil do usuário */}
      <ProfileContainer>
        <ProfileItems>
          <ProfileImg>
            <img
              src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
              alt="Imagem de Perfil"
            />
          </ProfileImg>
          <h2>{user?.nome || "Usuário"}</h2>
          <p>Id: {user?.id || "N/A"}</p>
          <p>Email: {user?.email || "N/A"}</p>
        </ProfileItems>
      </ProfileContainer>

      {/* Lista de veículos reservados */}
      <SolicitationContainer>
        <Title>Reservas Solicitadas</Title>
        {user?.dadosVeiculos && user.dadosVeiculos.length > 0 ? (
          user.dadosVeiculos.map((veiculo, index) => {
            // Busca informações adicionais do carro pelo slug
            const carDetails = Cars.find((car) => car.slug === veiculo.slug);

            return (
              <Solicitation key={index}>
                <Message>
                  <h3>Solicitação {index + 1}</h3>
                  <p>Nome: {carDetails?.name || "N/A"}</p>
                  <p>Valor: {carDetails?.price || "N/A"}</p>
                </Message>
                <VehicleImage>
                  <img
                    src={carDetails?.img || "https://via.placeholder.com/150"}
                    alt={carDetails?.name || "Imagem do Veículo"}
                  />
                </VehicleImage>
              </Solicitation>
            );
          })
        ) : (
          <p>Você ainda não fez nenhuma reserva.</p>
        )}
      </SolicitationContainer>
    </Container>
  );
};

export default Perfil;
