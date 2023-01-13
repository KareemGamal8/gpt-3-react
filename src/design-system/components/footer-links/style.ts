import styled from "@emotion/styled";
import { theme } from "design-system/global/theme";

export const LinkTitle = styled.h4`
  label: LinkTitle;
  margin-bottom: 1.5rem;
`;

export const Link = styled.div`
  label: Link;
  margin: 1rem 0;
  & a {
    color: ${theme.colors.primary};
    font-size: 0.75rem;
  }
`;
