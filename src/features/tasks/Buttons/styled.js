import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        display: grid;
        grid-gap: 20px;
    }
`;

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

    ${({ doneAll }) => doneAll && css`
        &:disabled {
            color: ${({ theme }) => theme.colors.fillingColor};
        }
    `}
`;