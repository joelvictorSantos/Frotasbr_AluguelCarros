import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  padding: 25px 150px;
  height: 96px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: var(--green);
`

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
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
export const Menu = styled.div`
  ul{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    color: white;
    li{
      display: flex; 
      flex-direction: row; 
      align-items: center; 
      padding: 8px;
      icon{
      color: rgb(94, 238, 92);
      font-size: 1rem;
      margin-right: 8px;
      }
      h1{
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0;
      color: white;
      }
      span{
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0;
        color: white;
      }
      span b{
        font-size: 1.1rem;
        font-weight: 300;
        
      }
    }
  }
`;

