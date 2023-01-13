import Information from "design-system/components/information/Information";
import { Container } from "design-system/global/container";
import { SpanDash } from "design-system/global/globalStyles";
import {
  AboutUsButton,
  AboutUsContainer,
  AboutUsContent,
  AboutUsDescription,
  AboutUsGpt,
  AboutUsInformation,
  AboutUsTitle,
  AboutUsWrapper,
} from "./style";

export default function AboutUs() {
  return (
    <Container>
      <AboutUsWrapper id="about">
        <AboutUsContent>
          <AboutUsGpt>
            <SpanDash></SpanDash>
            <h4>What is GPT-3</h4>
          </AboutUsGpt>
          <AboutUsDescription>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </AboutUsDescription>
        </AboutUsContent>
        <AboutUsInformation>
          <AboutUsTitle>
            The possibilities are beyond <br /> your imagination
          </AboutUsTitle>
          <AboutUsButton>Explore The Library</AboutUsButton>
        </AboutUsInformation>
        <AboutUsContainer>
          <Information
            title="Chat bots"
            description="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          />
          <Information
            title="Knowledge base"
            description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
          />
          <Information
            title="Education"
            description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
          />
        </AboutUsContainer>
      </AboutUsWrapper>
    </Container>
  );
}
