import { SpanDash } from "design-system/global/globalStyles";
import {
  InformationDescription,
  InformationTitle,
  InformationWrapper,
} from "./style";

export default function Information(props: any) {
  return (
    <InformationWrapper>
      <InformationTitle>
        <SpanDash></SpanDash>
        <h4>{props.title}</h4>
      </InformationTitle>
      <InformationDescription>{props.description}</InformationDescription>
    </InformationWrapper>
  );
}
