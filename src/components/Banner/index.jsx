import React from "react";
import { Link } from "react-router-dom";
import { Container, Text } from "./styles";

const Banner = () => {
  return (
    <Container>
       <Text>
        <h2>Aluguel de veículos pela melhor locadora do Brasil</h2>
        <p>Não perca tempo procurando por um carro. Alugue o seu conosco e viaje com tranquilidade.</p>
        <Link to="/managem">
        <span>Alugue</span>
        </Link>
      </Text>
    </Container>
  );
}

export default Banner
