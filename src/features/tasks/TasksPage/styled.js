import styled, { css } from "styled-components";

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

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.fillingColor};

  ${({ search }) => search && css`
    width: 100%;
  `}
`;