import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { siteMetadata } from "../../gatsby-config";

const Seo = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;
  //   const siteUrl = data.site.siteMetadata.siteUrl;
  return (
    <>
      <title>
        {pageTitle} | {title}
      </title>
      <meta name="description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | ${description}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://example.com/gatsby.jpg" />
      <meta property="og:url" content="https://example.com/the-great-gatsby" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={description} />
      <meta name="twitter:image" content="https://example.com/gatsby.jpg" />
    </>
  );
};

export default Seo;
