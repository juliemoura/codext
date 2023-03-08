import { Row, Col } from "antd";
import styled from "styled-components";

export const Container = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    gap: 30px;

    @media(max-width: 1020px){
        padding: 40px 20px;
    }
`;

export const LeftContainer = styled(Col)``;

export const RightContainer = styled(Col)``;