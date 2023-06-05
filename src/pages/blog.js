import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

const BlogPage = () => {
  const data = useStaticQuery(query);
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
