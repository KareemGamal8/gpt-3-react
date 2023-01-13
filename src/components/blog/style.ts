import styled from "@emotion/styled";
import { MainTitle } from "design-system/global/globalStyles";

export const BlogWrapper = styled.div`
  label: BlogWrapper;
  margin: 6rem 0;
`;

export const BlogTitle = styled(MainTitle)`
  label: BlogTitle;
`;

export const BlogContent = styled.div`
  label: BlogContent;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const BlogContainer = styled.div`
  label: BlogContainer;
  flex: 1 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
