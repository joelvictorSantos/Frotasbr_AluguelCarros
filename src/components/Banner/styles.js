import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 110px 85px;
  background-size: cover;
  background-position: center;
  background-image: url('https://plus.unsplash.com/premium_photo-1661288445210-380b59081236?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  
  /* Adicionar o overlay diretamente ao container */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro transparente */
    z-index: 1; /* Coloca o overlay acima da imagem */
  }
`;

export const Text = styled.div`
  position: relative;
  z-index: 2; /* Garante que o texto esteja acima do overlay */
  width: 55%;
  
  h2 {
    color: var(--white);
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  
  p {
    color: var(--white);
    margin-bottom: 25px;
  }
  span {
  background-color: var(--green);
  border-radius: 50px;
  color: var(--white);
  font-weight: bold;
  font-size: 18px;
  padding: 12px 120px;
  font-size: 18px;
  border-radius: 20px; 
  cursor: pointer;
  text-align: center;
  transition: 0.3s; 
  &:hover{
        background-color: green;
        cursor: pointer;
      }
    }
  }
`;
