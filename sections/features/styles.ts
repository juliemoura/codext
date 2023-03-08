import { Row } from "antd";
import styled from "styled-components";

export const Container = styled.section`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TextContainer = styled.div`
    width: 30%;

    @media(max-width: 1130px) {
        width: 100%;
    }
`;

export const CardsContent = styled(Row)`
    display: flex;
    gap: 50px;
    margin-top: 50px;

    @media(max-width: 1130px) {
        flex-direction: column;
        margin-top: 30px;
    }
`;