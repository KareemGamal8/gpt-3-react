import styled from "@emotion/styled";
import { theme } from "./theme";

export const MainTitle = styled.h2`
  font-weight: 800;
  font-size: 3.875rem;
  line-height: 4.7rem;
  background: linear-gradient(
    89.97deg,
    ${theme.colors.tyrian} 1.84%,
    ${theme.colors.tangerine} 102.67%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 2.5rem 0;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 2.1rem;
  background: linear-gradient(
    89.97deg,
    ${theme.colors.tyrian} 1.84%,
    ${theme.colors.tangerine} 102.67%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 2rem 0;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MainDescription = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.9rem;
  color: ${theme.colors.glacier};
  margin: 2.5rem 0;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SecondTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: ${theme.colors.pink};
`;

export const SpanDash = styled.span`
  background: linear-gradient(
      103.22deg,
      ${theme.colors.tyrian} -13.86%,
      ${theme.colors.tangerine} 99.55%
    ),
    #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 2.4rem;
  display: block;
  height: 0.18rem;
`;
