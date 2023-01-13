import { SpanDash } from "design-system/global/globalStyles";
import { FeatureDescription, FeatureTitle, FeatureWrapper } from "./style";

export default function Feature(props: any) {
  return (
    <FeatureWrapper>
      <FeatureTitle>
        <SpanDash></SpanDash>
        <h4>{props.title}</h4>
      </FeatureTitle>
      <FeatureDescription>{props.description}</FeatureDescription>
    </FeatureWrapper>
  );
}
