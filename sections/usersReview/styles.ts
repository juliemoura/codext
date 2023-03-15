import { Row } from "antd";
import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1130px)  {
    height: 100%;
  };

  @media(max-width: 768px) {
    padding: 20px;
  }
`;

export const CardUserContainer = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 30px 20px;

`;
