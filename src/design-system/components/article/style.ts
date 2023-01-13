import styled from "@emotion/styled";
import { theme } from "design-system/global/theme";

export const ArticleWrapper = styled.div`
  label: ArticleWrapper;
  color: ${theme.colors.primary};
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #042c54;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ArticleImage = styled.div`
  label: ArticleImage;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.ebony};
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const ArticleContent = styled.div`
  label: ArticleContent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  height: 100%;
`;

export const ArticleButton = styled.button`
  label: ArticleButton;
  background: none;
  outline: none;
  color: ${theme.colors.primary};
  border: none;
  font-weight: 700;
  font-size: 0.7rem;
  margin-top: 2rem;
`;
