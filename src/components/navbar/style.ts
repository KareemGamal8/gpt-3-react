import styled from "@emotion/styled";
import { theme } from "design-system/global/theme";

interface props {
  click: boolean;
}

export const NavContainer = styled.nav`
  label: NavContainer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  & a {
    color: ${theme.colors.primary};
  }
`;

export const NavWrapper = styled.div`
  label: NavWrapper;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const LogoWrapper = styled.div`
  label: LogoWrapper;
  display: flex;
  align-items: center;
  & img {
    width: 3.91rem;
  }
  @media screen and (max-width: 1024px) {
    & img {
      width: 3.5rem;
    }
  }
`;

export const LinksWrapper = styled.ul`
  label: LinksWrapper;
  display: flex;
  align-items: center;
  & a {
    font-size: 1.1rem;
  }
  gap: 4rem;
  @media screen and (max-width: 1024px) {
    display: ${({ click }: props) => (click ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    right: 5%;
    top: 5rem;
    background-color: ${theme.colors.midnight};
    padding: 1.5rem;
    border-radius: 5px;
    width: 70%;
    align-items: flex-start;
  }
  @media screen and (max-width: 1280px){
    & a {
      font-size: 0.9rem;
    }
  }
`;

export const SignButtonWrapper = styled.div`
  label: SignButtonWrapper;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  label: ButtonsWrapper;
  display: none;
  width: 100%;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SignButton = styled.button`
  label: SignButton;
  color: ${theme.colors.primary};
  padding: 1rem 2.4rem;
  background-color: transparent;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  border: none;
  &:last-of-type {
    background-color: ${theme.colors.orange};
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const MobileIcon = styled.div`
  label: MobileIcon;
  display: none;
  cursor: pointer;
  & svg {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
