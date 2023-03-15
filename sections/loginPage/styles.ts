import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(180deg, #5822c9 0%, #000 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 40px;
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  backdrop-filter: blur(30px);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 10px 0;
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const IconContent = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ForgotContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;