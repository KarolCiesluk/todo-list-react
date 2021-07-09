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
    border-bottom: 1px solid ${({ theme }) => theme.fillingColor};

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

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.secondaryColor};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => {
      return theme.buttonColors.forestGreen.standard;
    }};

        &:hover {
            background: ${({ theme }) => {
      return theme.buttonColors.forestGreen.hover;
    }};
            cursor: pointer;
        }

        &:active {
            background: ${({ theme }) => {
      return theme.buttonColors.forestGreen.active;
    }};
        }
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.buttonColors.crimson.standard};

        &:hover {
            background: ${({ theme }) => theme.buttonColors.crimson.hover};
            cursor: pointer;
        }

        &:active {
            background: ${({ theme }) => theme.buttonColors.crimson.active};
        }
    `}
`;