import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.colors.secondaryColor};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.fillingColor};
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.fillingColor};
    padding: 20px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 32px;
    };
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const Body = styled.div`
    padding: 20px;
`;