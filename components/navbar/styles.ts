import styled from "styled-components";

export const Container = styled.nav`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 100px;
  background-color: ${({ theme }) => theme.colors.purple500};
  padding: 20px 110px;
`;
