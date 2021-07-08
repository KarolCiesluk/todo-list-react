import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background: teal;
    color: white;
    border: none;
    transition: transform 0.3s, background 0.3s;

    &:hover {
        transform: scale(1.1);
        background-color: hsl(180, 100%, 30%);
        cursor: pointer;
    }

    &:focus {
        outline: none;
        background-color: hsl(180, 100%, 35%);
    }
`;