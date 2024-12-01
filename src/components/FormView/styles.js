import styled from "styled-components";

export const PlanFormContact = styled.div`
  h3 {
    margin-bottom: 15px;
    color: var(--secondary);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
      font-size: 0.9rem;
      font-weight: 600;
      color: #333;
    }

    select {
      width: 100%;
      height: 40px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      color: #333;
      background-color: #fff;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: var(--primary);
        outline: none;
      }
    }

    .row {
      display: flex;
      justify-content: space-between;
      gap: 15px;

      .field {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
        span {
    font-size: 1rem;
    margin-bottom: 10px;
    display: block;
    color: var(--secondary);
  }
    }
  }
`;

export const PlanContact = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--secondary);
  }

  span {
    font-size: 1rem;
    margin-bottom: 10px;
    display: block;
    color: var(--secondary);
  }
`;

export const PlanMonthly = styled.div`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 150%;
  margin: 0 auto;
  justify-content: space-between;
  select {
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;

  }
`;

export const PlanDescription = styled.div`
  h3 {
    font-size: 1.7rem;
    margin-bottom: 15px;
    color: var(--secondary);
  }
  hr {
    margin-bottom: 15px
  }
  p {
    margin-bottom: 10px;
    color: gray;
    font-size: 1rem;
    
  }
`;

export const CarInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Espaço entre a imagem e o texto */
  padding: 10px;
  max-width: 500px;


  .car-details {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      font-weight: bold;
      font-size: 1rem;
      color: #333;
    }

    p {
      font-size: 0.9rem;
      color: gray;
    }
  }
`;

export const VehicleImage = styled.div`
  width: 210px;
  height: 130px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
