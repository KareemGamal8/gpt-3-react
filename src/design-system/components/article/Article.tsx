import {
  ArticleButton,
  ArticleContent,
  ArticleImage,
  ArticleWrapper,
} from "./style";

export default function Article(props: any) {
  return (
    <ArticleWrapper>
      <ArticleImage>
        <img src={props.img} alt="" />
      </ArticleImage>
      <ArticleContent>
        <div>
          <p>{props.date}</p>
          <h3>{props.title}</h3>
        </div>
        <div>
          <ArticleButton>Read Full Article</ArticleButton>
        </div>
      </ArticleContent>
    </ArticleWrapper>
  );
}
