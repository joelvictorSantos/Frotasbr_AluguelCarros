import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 25px 150px;
  h2{
  color: #0f7855;
  }
`

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 150px;
`
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
    font-weight: 600;
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

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 35%;
  background-color: var(--green);
  border-radius: 5px; 
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  span {
    font-size: 14px;
    font-weight: bold;
    color: green;
    text-transform: uppercase; 
  }

  &:hover {
    background-color: green;
    span {
    
    }
  }
`;
