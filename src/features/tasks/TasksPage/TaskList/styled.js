import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.fillingColor};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor.standard};

    &:hover {
        color: ${({ theme }) => theme.colors.primaryColor.hover};
    }

    &:active {
        color: ${({ theme }) => theme.colors.primaryColor.active};
    }
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.colors.secondaryColor};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.colors.buttonColors.forestGreen.standard};

        &:hover {
            background: ${({ theme }) => theme.colors.buttonColors.forestGreen.hover};
            cursor: pointer;
        }

        &:active {
            background: ${({ theme }) => theme.colors.buttonColors.forestGreen.active};
        }
    `};

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.colors.buttonColors.crimson.standard};

        &:hover {
            background: ${({ theme }) => theme.colors.buttonColors.crimson.hover};
            cursor: pointer;
        }

        &:active {
            background: ${({ theme }) => theme.colors.buttonColors.crimson.active};
        }
    `};
`;