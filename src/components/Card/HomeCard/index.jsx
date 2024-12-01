import React, { useState } from "react";
import {
  Container,
  Description,
  Img,
  Itens,
  CardsContainer,
  NavigationButton,
  
} from "./styles";
import carro1 from "../../../assets/card-img/carro-fiate.png";
import carro2 from "../../../assets/card-img/carro-jeepCommander.png";
import carro3 from "../../../assets/card-img/carro-motorolaHilux.png";
import carro4 from "../../../assets/card-img/carro-FiatCronos.png"
import carro5 from "../../../assets/card-img/carro-jeepRenegade.png";
import carro6 from "../../../assets/card-img/saveiro.png";

const cars = [
  { id: 1, img: carro1, name: "Fiat Mobi Like", description: "Mobi Like 4P 1.0 Flex Hatch", price: "R$ 1.750,00/mês" },
  { id: 2, img: carro2, name: "Jeep Commander Limited", description: "Commander Limited 1.3 T270 4X2 Flex SUV", price: "R$ 5.899,99/mês" },
  { id: 3, img: carro3, name: "Toyota Hillux mobil", description: "Hillux mobil 2.0 Flex Sedan - CVT", price: "R$ 6.329,00/mês" },
  { id: 4, img: carro4, name: "Fiat Cronos Drive", description: "Cronos Drive 4P 1.3 Flex Sedan", price: "R$ 2.275,00/mês" },
  { id: 5, img: carro5, name: "Jeep Renegade Longitude", description: "Renegade Longitude T270 4X2 Flex SUV", price: "R$ 3.799,99/mês" },
  { id: 6, img: carro6, name: "Volkswagen Saveiro Robust", description: "Saveiro Robust CS 1.6 116HP Flex Picape", price: "R$ 2.889,99/mês" },
];

const HomeCard = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cars.length / 2));

  const handleNext = () => {
    if (activeIndex < cars.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <CardsContainer>
      <NavigationButton onClick={handlePrev} isLeft disabled={activeIndex === 0}>
        {"<"}
      </NavigationButton>

      {cars.map((car, index) => {
        const isActive = index === activeIndex;
        const position = index - activeIndex;

        return (
          <Container key={car.id} isActive={isActive} position={position}>
            <Img>
              <img src={car.img} alt={car.name} />
            </Img>
            <Description>
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <Itens>
                <span>A partir de</span>
                <span>
                  <b>{car.price}</b>
                </span>
              </Itens>
            </Description>
          </Container>
        );
      })}

      <NavigationButton onClick={handleNext} disabled={activeIndex === cars.length - 1}>
        {">"}
      </NavigationButton>
    </CardsContainer>
  );
};

export default HomeCard;
