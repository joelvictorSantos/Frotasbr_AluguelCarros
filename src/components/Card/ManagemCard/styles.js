import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding-bottom: 18px;
`;

export const Container = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  width: 330px;
  height: 65vh;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.div`
  width: 100%; 
  height: 135px; 
  object-fit: cover; 
  img {
    width: 65%;
    height: auto;
    border-bottom: 2px solid #eaeaea;
  }
`;

export const Description = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  font-weight: bold;
  font-size: 0.9rem;
  color: black;

  h3 {
    font-size: 1.4rem;
    color: #0f7855;
    margin-bottom: 12px;
  }

  p {
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 15px;
  }
  b {
    font-size: 0.95rem;
    color: #0f7855;
  }
  p {
    margin: 5px 0;
    font-size: 0.85rem;
    color: #333;
  }
    
 }
}
`;

export const Itens = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between; /* Espaça os itens igualmente */
  flex-wrap: wrap;
  gap: 5px;

  span {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 8px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    padding: 10px 20px;
    background-color: var(--green);
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase; 

     &:hover {
        background-color: green;
    }
  }
    
`;


