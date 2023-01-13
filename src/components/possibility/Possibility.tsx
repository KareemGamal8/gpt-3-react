import { Container } from "design-system/global/container";
import possibility from "shared/images/possibility.png";
import {
  PossibilityContent,
  PossibilityDescription,
  PossibilityImage,
  PossibilityRequest,
  PossibilityTitle,
  PossibilityWrapper,
} from "./style";

export default function Possibility() {
  return (
    <Container>
      <PossibilityWrapper id="possibility">
        <PossibilityImage>
          <img src={possibility} alt="possibility" />
        </PossibilityImage>
        <PossibilityContent>
          <PossibilityRequest>
            Request Early Access to Get Started
          </PossibilityRequest>
          <PossibilityTitle>
            The possibilities are <br /> beyond your imagination
          </PossibilityTitle>
          <PossibilityDescription>
            Yet bed any for traveling assistance indulgence unpleasing. Not{" "}
            <br />
            thoughts all exercise blessing. Indulgence way everything joy <br />
            alteration boisterous the attachment. Party we years to order allow{" "}
            <br />
            asked of.
          </PossibilityDescription>
          <PossibilityRequest>
            Request Early Access to Get Started
          </PossibilityRequest>
        </PossibilityContent>
      </PossibilityWrapper>
    </Container>
  );
}
