import styled from "@emotion/styled";
import { SecondTitle } from "design-system/global/globalStyles";
import { theme } from "design-system/global/theme";

export const RegisterWrapper = styled.div`
  label: RegisterWrapper;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 2.5rem;
  margin: 4rem 0;
  background: linear-gradient(
    89.97deg,
    ${theme.colors.tyrian} 1.84%,
    ${theme.colors.tangerine} 102.67%
  );
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.3rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const RegisterRequest = styled(SecondTitle)`
  label: RegisterRequest;
  color: ${theme.colors.onyx};
`;

export const RegisterTitle = styled.h3`
  label: RegisterTitle;
  color: ${theme.colors.onyx};
  font-weight: 800;
  margin: 1rem 0;
  font-size: 1.5rem;
  line-height: 2.8rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`;

export const RegisterButton = styled.button`
  label: RegisterButton;
  background: ${theme.colors.black};
  font-weight: 700;
  font-size: 1.1rem;
  outline: none;
  border: none;
  color: ${theme.colors.primary};
  border-radius: 2.5rem;
  width: 11.8rem;
  height: 3.75rem;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
