import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.primaryColor.standard};
    font-size: initial;

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