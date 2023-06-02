import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact = () => {
  return (
    <Layout pageTitle="Contact Me">
      <p>Shoot me a mail in case you want to chat</p>
    </Layout>
  );
};

// metadata for seo
export const Head = () => <Seo pageTitle="Contact" />;

export default Contact;
