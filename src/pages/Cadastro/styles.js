import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.875rem;
    color: #0f7855;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  span {
    color: #0077b5;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

export const ContainerForm = styled.div`
  background-color: var(--white);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 35px;
  width: 370px;
`;

export const CenterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form` // Alterado para tag <form> semântica
  width: 100%;
`;

export const Label = styled.label` // Alterado para tag <label>
  display: flex;
  margin-bottom: 10px;
  font-weight: 500; 
`;

export const CenterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
  text-align: center;
  margin: 10px 0;
  visibility: hidden;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.show {
    visibility: visible;
  }
`;
