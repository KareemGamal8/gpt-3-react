import styled from "@emotion/styled";
import { MainTitle, SecondTitle } from "design-system/global/globalStyles";
import { theme } from "design-system/global/theme";

export const FooterWrapper = styled.div`
  label: FooterWrapper;
  padding: 5rem 5rem 1rem 5rem;
  background: #031b34;
  color: ${theme.colors.primary};
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FooterTitle = styled(MainTitle)`
  label: FooterTitle;
  text-align: center;
`;

export const FooterRequest = styled(SecondTitle)`
  label: FooterRequest;
  border: 1px solid ${theme.colors.primary};
  background: none;
  color: ${theme.colors.primary};
  width: fit-content;
  margin: auto;
  padding: 1.5rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterContent = styled.div`
  label: FooterContent;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3.5rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const FooterLogo = styled.img`
  label: FooterLogo;
  margin-bottom: 1.5rem;
`;

export const FooterDescription = styled.p`
  label: FooterDescription;
  font-size: 0.75rem;
`;

export const FooterCopyRight = styled.p`
  label: FooterCopyRight;
  font-size: 0.75rem;
  color: ${theme.colors.primary};
  text-align: center;
`;
