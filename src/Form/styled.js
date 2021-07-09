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
    border: 1px solid ${({ theme }) => theme.fillingColor};
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({ theme }) => theme.primaryColor.standard};
    color: ${({ theme }) => theme.secondaryColor};
    border: none;
    transition: transform 0.3s, background 0.3s;

    &:hover {
        transform: scale(1.1);
        background-color: ${({ theme }) => theme.primaryColor.hover};
        cursor: pointer;
    }

    &:focus {
        outline: none;
        background-color: ${({ theme }) => theme.primaryColor.hover};
    }

    &:active {
        background-color: ${({ theme }) => theme.primaryColor.active};
    }
`;