import { Row, Col } from "antd";
import styled from "styled-components";

export const Container = styled.section`
    padding: 150px 60px;
    gap: 20px;
    display: flex;
    flex-direction: column;


    @media(max-width: 1020px) { 
        padding: 60px 20px;
    };
`;

export const CardUserContainer = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 30px 20px;
`;
