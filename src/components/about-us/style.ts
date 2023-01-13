import styled from "@emotion/styled";
import { SecondTitle, SectionTitle } from "design-system/global/globalStyles";
import { theme } from "design-system/global/theme";

export const AboutUsWrapper = styled.div`
  label: AboutUsWrapper;
  background: radial-gradient(
    circle at 30% -100%,
    ${theme.colors.vogue} 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 3rem 4.5rem;
  margin: 6rem 0;
  @media screen and (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const AboutUsContent = styled.div`
  label: AboutUsContent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const AboutUsGpt = styled.div`
  label: AboutUsGpt;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 4.7rem;
  letter-spacing: -0.04em;
  color: ${theme.colors.primary};
`;

export const AboutUsDescription = styled.p`
  label: AboutUsDescription;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.9rem;
  color: ${theme.colors.glacier};
  width: 45%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutUsInformation = styled.div`
  label: AboutUsInformation;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AboutUsTitle = styled(SectionTitle)`
  label: AboutUsTitle;
`;

export const AboutUsButton = styled(SecondTitle)`
  label: AboutUsButton;
`;

export const AboutUsContainer = styled.div`
  label: AboutUsContainer;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
  @media screen and (max-width: 1024px) {
    gap: 2rem;
    flex-direction: column;
  }
`;
