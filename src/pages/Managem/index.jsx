import React, { Fragment } from "react";
import {
  Header, 
  Wrapper
} from "./styles";
import Cars from "../../cardata/Cars";
import ManagemCard from "../../components/Card/ManagemCard";

const Managem = () => {
  
  return (
    <Fragment>
      <Header>
        <h2>Encontre o seu veículo ideal</h2>
      </Header>
      <Wrapper>
        {Cars.map((car) => (
          <ManagemCard 
            key={car.id}
            id={car.id} // Passe o ID para gerar o link corretamente
            img={car.img}
            name={car.name}
            description={car.description}
            price={car.price}
            slug={car.slug}
          />
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default Managem;
