import styled from "@emotion/styled";
import {
  MainDescription,
  SecondTitle,
  SectionTitle,
} from "design-system/global/globalStyles";
import { theme } from "design-system/global/theme";

export const PossibilityWrapper = styled.div`
  label: PossibilityWrapper;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6rem 0;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const PossibilityImage = styled.div`
  label: PossibilityImage;
  img {
    width: 100%;
  }
  flex: 1 2;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const PossibilityContent = styled.div`
  label: PossibilityContent;
  flex: 1;
`;

export const PossibilityRequest = styled(SecondTitle)`
  label: PossibilityRequest;
  &:first-of-type {
    color: ${theme.colors.celeste};
  }
`;

export const PossibilityTitle = styled(SectionTitle)`
  label: PossibilityTitle;
  color: ${theme.colors.celeste};
`;

export const PossibilityDescription = styled(MainDescription)`
  label: PossibilityDescription;
`;
