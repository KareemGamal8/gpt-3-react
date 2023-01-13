import Feature from "design-system/components/feature/Feature";
import { Container } from "design-system/global/container";
import {
  FeaturesContent,
  FeaturesInformation,
  FeaturesRequest,
  FeaturesTitle,
  FeaturesWrapper,
} from "./style";

export default function Features() {
  return (
    <Container>
      <FeaturesWrapper id="features">
        <FeaturesInformation>
          <FeaturesTitle>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </FeaturesTitle>
          <FeaturesRequest>Request Early Access to Get Started</FeaturesRequest>
        </FeaturesInformation>
        <FeaturesContent>
          <Feature
            title="Improving end distrusts instantly"
            description="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          />
          <Feature
            title="Become the tended active"
            description="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          />
          <Feature
            title="Message or am nothing"
            description="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          />
          <Feature
            title="Really boy law county"
            description="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          />
        </FeaturesContent>
      </FeaturesWrapper>
    </Container>
  );
}
