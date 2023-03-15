import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TypographyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const TypographyContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 1010px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ImageContent = styled(Image)`
  display: flex;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 100%;
`;
