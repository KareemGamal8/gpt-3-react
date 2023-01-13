import { Container } from "design-system/global/container";
import {
  RegisterButton,
  RegisterRequest,
  RegisterTitle,
  RegisterWrapper,
} from "./style";

export default function Register() {
  return (
    <Container>
      <RegisterWrapper id="library">
        <div>
          <RegisterRequest>Request Early Access to Get Started</RegisterRequest>
          <RegisterTitle>
            Register today & start exploring the endless possibilities.
          </RegisterTitle>
        </div>
        <RegisterButton>Get Started</RegisterButton>
      </RegisterWrapper>
    </Container>
  );
}
