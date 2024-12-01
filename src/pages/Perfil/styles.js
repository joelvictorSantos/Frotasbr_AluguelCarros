import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 500px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    font-size: 1.5em;
    color: #333;
  }

  p {
    font-size: 1em;
    color: #555;
  }
`;

export const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
`;

export const ProfileItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: left;
  margin-bottom: 15px;
  color: #333;
  font-size: 1.8em;
  
`;

export const SolicitationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 30px 60px;
  gap: 20px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

export const Solicitation = styled.div`
  flex: 0 0 calc(50% - 10px);
  padding: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    color: #555;
  }
    
`;

export const VehicleImage = styled.div`
  width: 160px;
  height: 96px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #ffff;
`;
