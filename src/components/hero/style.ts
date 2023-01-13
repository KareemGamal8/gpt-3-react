import styled from "@emotion/styled";
import { MainDescription, MainTitle } from "design-system/global/globalStyles";
import { theme } from "design-system/global/theme";

export const HeroContainer = styled.div`
  label: HeroContainer;
  position: absolute;
  width: 500px;
  height: 1013px;
  left: -350px;
  top: -277px;
  background: ${theme.colors.cyan};
  -webkit-filter: blur(282px);
  filter: blur(282px);
`;

export const HeroWrapper = styled.div`
  label: HeroWrapper;
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  margin: 2rem 0;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const HeroTitle = styled(MainTitle)`
  label: HeroTitle;
`;

export const HeroDescription = styled(MainDescription)`
  label: HeroDescription;
`;

export const HeroForm = styled.form`
  label: HeroForm;
  margin: 2.5rem 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HeroInput = styled.input`
  label: HeroInput;
  width: 28.5rem;
  height: 4.5rem;
  outline: none;
  background: #052d56;
  border-radius: 5px 0 0 5px;
  border: none;
  color: ${theme.colors.denim};
  padding: 0 1rem;
  font-size: 1.25rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const HeroSubmit = styled.input`
  label: HeroSubmit;
  width: 10.9rem;
  height: 4.5rem;
  cursor: pointer;
  padding: 0 1rem;
  border-radius: 0 5px 5px 0;
  outline: none;
  border: none;
  text-align: center;
  background-color: ${theme.colors.orange};
  font-size: 1.25rem;
  color: ${theme.colors.primary};
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const HeroUsers = styled.div`
  label: HeroUsers;
  margin: 2.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  & p {
    font-size: 0.75rem;
    color: ${theme.colors.primary};
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroImage = styled.img`
  label: HeroImage;
  width: 42rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
