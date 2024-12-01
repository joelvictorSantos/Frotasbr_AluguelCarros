import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 10px; /* Espaçamento maior entre os cards */
  margin: 220px auto; /* Espaçamento vertical */
  position: relative; /* Para posicionar os botões de navegação */
  width: 100%;
`;

export const Container = styled.div`
  position: absolute;
  
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.position === 0
      ? "translateX(0) scale(1.2)" // Card ativo no centro
      : `translateX(${props.position * 350}px) scale(1)`}; /* Espaçamento horizontal aumentado */
  opacity: ${(props) => (Math.abs(props.position) > 1 ? "0" : "1")}; /* Esconde cards fora de alcance */
  z-index: ${(props) => 10 - Math.abs(props.position)};
  
  width: 280px;
  height: 350px;
  text-align: center;
  margin-top: 15x; /* Espaçamento vertical adicional */
  transition: all 0.3s ease;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  width: 40px;
  transform: translateY(-50%);
  background-color: #0f7855;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: green;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }

  ${(props) => (props.isLeft ? "left: -50px;" : "right: -50px;")}
`;


export const Img = styled.div`
  width: 100%;
  img {
    width: 100%; 
    height: auto; 
  }
`;

export const Description = styled.div`
  padding: 20px;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #0f7855;
    margin-bottom: 12px;
  }

  p {
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 8px;
  }
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 0.95rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  span b {
    font-size: 1.2rem;
    font-weight: bold;
    color: #0f7855; /* Verde para preço */
  }
`;