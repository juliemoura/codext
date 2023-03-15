import { Row } from "antd";
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

export const TextContainer = styled.div`
  width: 30%;

  @media (max-width: 1130px) {
    width: 100%;
  }
`;

export const CardsContent = styled(Row)`
  display: flex;
  gap: 30px;
  margin-top: 50px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1130px) {
    flex-direction: column;
    margin-top: 30px;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
