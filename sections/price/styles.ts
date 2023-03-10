import styled from "styled-components";

export const Container = styled.section`
    padding: 0 20px 60px 20px;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px) {
        padding: 20px 0;
    }
`;