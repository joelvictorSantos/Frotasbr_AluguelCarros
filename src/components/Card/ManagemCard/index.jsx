import React from "react";
import { Link } from "react-router-dom";
import { GridContainer, Container, Description, Img, Itens, Button } from "./styles";

const ManagemCard = ({ price, description, name, img, slug }) => {
  return (
    <GridContainer>
      <Container key={slug}>
        <Img>
          <img src={img} alt={name} />
        </Img>
        <Description>
          <h3>{name}</h3>
          <p>{description}</p>
          <Itens>
            <span>Flex</span>
            <span>Freio ABS</span>
            <span>Ar-Condicionado</span>
            <span>Condutor Extra</span>
          </Itens>
          <span>
            A partir de <b>{price}</b>
          </span>
          <p>Plano de 36 meses</p>
          <p>Franquia de 5.000 km</p>
          <Link to={`/frotasbr/${slug}`}>
            <Button>
              <span>Alugue Agora</span>
            </Button>
          </Link>
        </Description>
      </Container>
    </GridContainer>
  );
};

export default ManagemCard;
