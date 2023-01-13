import styled from "@emotion/styled";
import { theme } from "design-system/global/theme";

export const InformationWrapper = styled.div`
  label: InformationWrapper;
  min-width: 33%;
  flex: 2 1;
`;

export const InformationTitle = styled.div`
  label: InformationTitle;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 4.7rem;
  letter-spacing: -0.04em;
  color: ${theme.colors.primary};
`;
export const InformationDescription = styled.p`
  label: InformationDescription;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.9rem;
  color: ${theme.colors.glacier};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
