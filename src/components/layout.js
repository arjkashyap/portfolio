import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { container, heading } from "../styles/layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <Navbar />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
