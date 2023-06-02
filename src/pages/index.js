import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
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
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/yuri.jpg"
      />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo pageTitle="Home Page" />;

// Step 3: Export your component
export default IndexPage;
