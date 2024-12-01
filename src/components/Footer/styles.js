import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Organiza os itens verticalmente */
  justify-content: center; /* Centraliza no eixo vertical */
  align-items: center; /* Centraliza no eixo horizontal */
  padding: 20px 100px;
  background-color: #222;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column; /* Coloca os itens um embaixo do outro */
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100px;
  }

  p {
    color: white;
    margin: 10px 0;
  }

  h3 {
    margin-bottom: 10px;
    color: white;
  }

  ul {
    display: flex; /* Deixa os ícones lado a lado */
    justify-content: center; /* Centraliza os ícones */
    margin-top: 15px;

    li {
      margin: 0 10px; /* Espaçamento entre os ícones */

      span a {
        color: white;
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.2); 
          color: #0077b5;
        }
      }
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 70px;
    margin-right: 15px;
  }
   div {
    display: flex;
    flex-direction: column; 
    color: white;

   h1 {
      font-size: 1.5rem; 
      margin: 0;
    }

   h2 {
      font-size: 0.9rem;
      font-weight: bold; 
      
    }
  }
`

export const Copy = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  align-items: center;
  padding: 20px 150px;
  border-top: 1px solid rgb(128, 128, 128);
  font-weight: bold; 
  color: white;
  ul{
    display: flex;
    align-items: center;
    li{
      span{
        margin-left: 15px;
      }
    }
  }
`