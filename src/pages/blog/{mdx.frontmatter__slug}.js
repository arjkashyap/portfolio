import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ pageContext, children }) => {
  console.log(pageContext.frontmatter.title);
  const title = pageContext.frontmatter.title;
  const dateStr = pageContext.frontmatter.date;
  return (
    <Layout pageTitle={title}>
      <p>{dateStr}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
