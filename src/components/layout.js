import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { container, heading } from "../styles/layout.module.css";
import Navbar from "./navbar";

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
      <br />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
