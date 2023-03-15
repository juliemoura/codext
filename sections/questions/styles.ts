import { Row, Col } from "antd";
import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1130px) {
    height: 100%;
  }
`;

export const Content = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 150px 60px;
    gap: 30px;

    @media(max-width: 1020px) { 
        padding: 60px 20px;
    };
`;

export const LeftContainer = styled(Col)``;

export const RightContainer = styled(Col)``;