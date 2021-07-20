import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    @media (max-width: 767px) {
        display: grid;
        grid-gap: 20px;
    }
`;

export const Button = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.primaryColor.standard};
    font-size: initial;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.primaryColor.hover};
        cursor: pointer;
    }

    &:active {
        color: ${({ theme }) => theme.primaryColor.active};
    }

    ${({ doneAll }) => doneAll && css`
        &:disabled {
            color: ${({ theme }) => theme.fillingColor};
        }
    `}
`;