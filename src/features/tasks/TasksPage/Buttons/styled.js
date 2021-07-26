import styled from "styled-components";

export const Wrapper = styled.div`
    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        display: grid;
        grid-gap: 20px;
    }
`;