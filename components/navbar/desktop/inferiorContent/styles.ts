import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.purple500};
  padding: 20px 110px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  width: 40%;
`;

export const RightContainer = styled.div``;
