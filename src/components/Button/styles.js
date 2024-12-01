import styled from "styled-components";

export const Container = styled.button`
    background-color: var(--green);
    color: #fff;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: green;
    }
`;