import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.pink};
  font-family: ${({ theme }) => theme.fontFamily.ubuntu};
`;
