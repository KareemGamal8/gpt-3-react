import { Container } from "design-system/global/container";
import atlassian from "shared/images/atlassian.png";
import dropbox from "shared/images/dropbox.png";
import google from "shared/images/google.png";
import shopify from "shared/images/shopify.png";
import slack from "shared/images/slack.png";
import { CompaniesWrapper } from "./style";

export default function Companies() {
  return (
    <Container>
      <CompaniesWrapper>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </CompaniesWrapper>
    </Container>
  );
}
