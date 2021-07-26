import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    };
`;

export const Button = styled.button`
    padding: 10px;
    background: ${({ theme }) => theme.colors.primaryColor.standard};
    color: ${({ theme }) => theme.colors.secondaryColor};
    border: none;
    transition: transform 0.3s, background 0.3s;

    &:hover {
        transform: scale(1.1);
        background-color: ${({ theme }) => theme.colors.primaryColor.hover};
        cursor: pointer;
    };

    &:focus {
        outline: none;
        background-color: ${({ theme }) => theme.colors.primaryColor.hover};
    };

    &:active {
        background-color: ${({ theme }) => theme.colors.primaryColor.active};
    };
`;