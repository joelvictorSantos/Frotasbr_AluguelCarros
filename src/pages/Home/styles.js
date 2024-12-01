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

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    padding: 10px 50px;
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
    span {
    
    }
  }
`;






  
