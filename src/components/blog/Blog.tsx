import Article from "design-system/components/article/Article";
import { Container } from "design-system/global/container";
import blogOne from "shared/images/blog01.png";
import blogTwo from "shared/images/blog02.png";
import blogThree from "shared/images/blog03.png";
import blogFour from "shared/images/blog04.png";
import blogFive from "shared/images/blog05.png";
import { BlogContainer, BlogContent, BlogTitle, BlogWrapper } from "./style";

export default function Blog() {
  return (
    <Container>
      <BlogWrapper>
        <BlogTitle>
          A lot is happening,
          <br /> We are blogging about it.
        </BlogTitle>
        <BlogContent>
          <div style={{ flex: "0.75 1" }}>
            <Article
              img={blogOne}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            />
          </div>
          <BlogContainer>
            <Article
              img={blogTwo}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            />
            <Article
              img={blogThree}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            />
            <Article
              img={blogFour}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            />
            <Article
              img={blogFive}
              date="Sep 26, 2021"
              title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            />
          </BlogContainer>
        </BlogContent>
      </BlogWrapper>
    </Container>
  );
}
