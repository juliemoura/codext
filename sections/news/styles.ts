import { Row } from "antd";
import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 1130px) {
    height: 100%;
    padding-top: 20px;
  }
`;

export const CardsContainer = styled(Row)`
  display: flex;
  gap: 20px;
  padding: 0 50px;
  align-items: center;
  justify-content: center;
`;
