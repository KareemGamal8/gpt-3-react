import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "shared/images/logo.svg";
import {
  ButtonsWrapper,
  LinksWrapper,
  LogoWrapper,
  MobileIcon,
  NavContainer,
  NavWrapper,
  SignButton,
  SignButtonWrapper,
} from "./style";

export default function Navbar() {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => setClick(!click);
  return (
    <NavContainer>
      <NavWrapper>
        <a href="#">
          <LogoWrapper>
            <img src={logo} alt="" />
          </LogoWrapper>
        </a>
        <LinksWrapper click={click}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">What is GPT?</a>
          </li>
          <li>
            <a href="#features">Open AI</a>
          </li>

          <li>
            <a href="#possibility">Case Studies</a>
          </li>
          <li>
            <a href="#library">Library</a>
          </li>
          <ButtonsWrapper>
            <SignButton>Sign In</SignButton>
            <SignButton>Sign Up</SignButton>
          </ButtonsWrapper>
        </LinksWrapper>
      </NavWrapper>
      <SignButtonWrapper>
        <SignButton>Sign In</SignButton>
        <SignButton>Sign Up</SignButton>
      </SignButtonWrapper>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
    </NavContainer>
  );
}
