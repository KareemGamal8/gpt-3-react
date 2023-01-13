import styled from "@emotion/styled";
import { theme } from "design-system/global/theme";

export const FeatureWrapper = styled.div`
  label: FeatureWrapper;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FeatureTitle = styled.div`
  label: FeatureTitle;
  flex: 1 1;
  font-weight: 800;
  font-size: 1.13rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: ${theme.colors.primary};
  & h4 {
    width: 70%;
  }
`;

export const FeatureDescription = styled.p`
  label: FeatureDescription;
  flex: 2 1;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: ${theme.colors.glacier};
  width: 40%;
  margin: 1.5rem 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
