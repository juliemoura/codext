import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.purple500};
  padding: 20px 110px;
`;
