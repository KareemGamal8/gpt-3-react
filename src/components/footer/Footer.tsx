import FooterLinks from "design-system/components/footer-links/FooterLinks";
import { Container } from "design-system/global/container";
import logo from "shared/images/logo.svg";
import {
  FooterContent,
  FooterCopyRight,
  FooterDescription,
  FooterLogo,
  FooterRequest,
  FooterTitle,
  FooterWrapper,
} from "./style";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterTitle>
          Do you want to step in to the <br /> future before others
        </FooterTitle>
        <FooterRequest>Request Early Access</FooterRequest>
        <FooterContent>
          <div>
            <FooterLogo src={logo} alt="logo" />
            <FooterDescription>
              Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
            </FooterDescription>
          </div>
          <FooterLinks
            title="Links"
            LinkOne="Overons"
            LinkTwo="Social Media"
            LinkThree="Counters"
            LinkFour="Contact"
          />
          <FooterLinks
            title="Company"
            LinkOne="Terms & Conditions"
            LinkTwo="Privacy Policy"
            LinkThree="Contact"
          />
          <FooterLinks
            title="Get in touch"
            LinkOne="Crechterwoord K12 182 DK Alknjkcb"
            LinkTwo="085-132567"
            LinkThree="info@payme.net"
          />
        </FooterContent>
        <FooterCopyRight>© 2021 GPT-3. All rights reserved.</FooterCopyRight>
      </Container>
    </FooterWrapper>
  );
}
