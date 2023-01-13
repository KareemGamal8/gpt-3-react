import { Link, LinkTitle } from "./style";

export default function FooterLinks(props: any) {
  return (
    <div>
      <LinkTitle>{props.title}</LinkTitle>
      <div>
        <Link>
          <a href="#">{props.LinkOne}</a>
        </Link>
        <Link>
          <a href="#">{props.LinkTwo}</a>
        </Link>
        <Link>
          <a href="#">{props.LinkThree}</a>
        </Link>
        <Link>
          <a href="#">{props.LinkFour}</a>
        </Link>
      </div>
    </div>
  );
}
