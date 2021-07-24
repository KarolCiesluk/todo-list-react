import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.primaryColor.standard};
    font-size: initial;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryColor.hover};
        cursor: pointer;
    }

    &:active {
        color: ${({ theme }) => theme.colors.primaryColor.active};
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.fillingColor};
    }
`;