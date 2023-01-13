import styled from "@emotion/styled";
import { SecondTitle, SectionTitle } from "design-system/global/globalStyles";

export const FeaturesWrapper = styled.div`
  label: FeaturesWrapper;
  display: flex;
  align-items: baseline;
  gap: 2rem;
  justify-content: space-between;
  margin: 6rem 0;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const FeaturesInformation = styled.div`
  label: FeaturesInformation;
  flex: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FeaturesContent = styled.div`
  label: FeaturesContent;
  flex: 1.5 1;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FeaturesTitle = styled(SectionTitle)`
  label: FeaturesTitle;
`;

export const FeaturesRequest = styled(SecondTitle)`
  label: FeaturesRequest;
`;
