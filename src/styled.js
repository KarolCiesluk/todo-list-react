import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.ul`
    background-color: ${({theme}) => theme.colors.primaryColor.standard};
    margin: 0;
    padding: 20px;
    display: flex;
    list-style: none;
    justify-content: center;
`;

export const NavigationButton = styled(NavLink)`
    color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 20px;
    text-decoration: none;

    &.active {
        font-weight: bold;
    }
`;