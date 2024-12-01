import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Container, Left, Right, Thumb, Character } from "./styles";
import Form from "../../components/FormView";
import Cars from "../../cardata/Cars";

const FrotasBr = () => {
  const { slug } = useParams();
  const car = Cars.find((car) => car.slug === slug);

  if (!car) {
    return <h2>Carro não encontrado</h2>;
  }

  return (
    <Fragment>
      <Container>
        <Left>
          <Thumb>
            <img src={car.img} alt={car.name} />
          </Thumb>
          <Character>
            <h1>{car.name}</h1>
            <hr />
            <p>
              Este carro zero KM combina conforto e segurança, com motor flex
              que permite o uso de diferentes combustíveis. O câmbio manual
              garante maior controle na direção, enquanto itens de segurança,
              como airbags e sistema de freios ABS, aumentam a proteção para os
              ocupantes.
            </p>
          </Character>
        </Left>
        <Right>
          <Form car={car} />
        </Right>
      </Container>
    </Fragment>
  );
};

export default FrotasBr;
