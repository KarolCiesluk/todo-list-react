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
    color: teal;
    font-size: initial;
    transition: color 0.3s;

    &:hover {
        color: hsl(180, 100%, 30%);
        cursor: pointer;
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    ${({ doneAll }) => doneAll && css`
        &:disabled {
            color: #ddd;
        }
    `}
`;