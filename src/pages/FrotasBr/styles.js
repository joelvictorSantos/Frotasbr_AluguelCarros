import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Right = styled.div`
  width: 28%;
  padding: 10px;
`;

export const Thumb = styled.div`
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const Character = styled.div`
  padding: 30px 0;
  h1 {
  margin-bottom: 15px;
  color: var(--secondary);
  }
  h3 {
  color: #0f7855;
  }
  hr {
  margin-bottom: 10px
  }
  p {
    margin-bottom: 10px;
    color: var(--secondary);
  }
`;

export const Center = styled.button`
display: flex;
   flex-direction: center;
  justify-content: center;
  align-items: center;
`;