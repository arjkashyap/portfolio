import * as React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../components/seo";

// Step 2: Define your component
const IndexPage = () => {
  const metaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Home Page">
      <p>This portfolio is currently under construction</p>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo pageTitle="Home Page" />;

// Step 3: Export your component
export default IndexPage;
