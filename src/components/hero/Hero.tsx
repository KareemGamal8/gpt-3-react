import { Container } from "design-system/global/container";
import ai from "shared/images/ai.png";
import people from "shared/images/people.png";
import Navbar from "../navbar/Navbar";
import {
  HeroContainer,
  HeroDescription,
  HeroForm,
  HeroImage,
  HeroInput,
  HeroSubmit,
  HeroTitle,
  HeroUsers,
  HeroWrapper,
} from "./style";

export default function Hero() {
  return (
    <>
      <HeroContainer></HeroContainer>
      <Container>
        <Navbar />
        <HeroWrapper>
          <div>
            <div>
              <HeroTitle>
                Let’s Build Something amazing with GPT-3 OpenAI
              </HeroTitle>
              <HeroDescription>
                Yet bed any for traveling assistance indulgence unpleasing.
                <br /> Not thoughts all exercise blessing. Indulgence way
                <br />
                everything joy alteration boisterous the attachment. Party
                <br /> we years to order allow asked of.
              </HeroDescription>
              <HeroForm>
                <HeroInput
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                />
                <HeroSubmit type="submit" value="Get Started" />
              </HeroForm>
              <HeroUsers>
                <img src={people} alt="people" />
                <p>1,600 people requested access a visit in last 24 hours</p>
              </HeroUsers>
            </div>
            <div></div>
          </div>
          <HeroImage src={ai} alt="ai" />
        </HeroWrapper>
      </Container>
    </>
  );
}
