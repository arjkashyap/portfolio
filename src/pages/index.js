import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { subHeading, iconSvg } from "../styles/index.module.css";
import { header } from "../styles/common.module.css";
import Seo from "../components/seo";
import { color } from "../theme";
import TwitterIcon from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";
import Linkedin from "../images/linkedin.svg";

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
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "0.5rem" }}>
          <h1 className={header}>Hi Friends-</h1>
          <h6 className={subHeading}>
            I'm Arjun Kashyap. I'm a{" "}
            <Link to="/resume" style={{ color: color.primary }}>
              software engineer
            </Link>
            ,{" "}
            <Link
              to="https://www.youtube.com/@mixedreality650"
              target="_blank"
              style={{ color: color.primary }}
            >
              content creator
            </Link>
            , and aspiring{" "}
            <Link to="/blog" style={{ color: color.primary }}>
              blogger/short story writer.
            </Link>
          </h6>
          <p>
            Elit aliquip proident consequat culpa elit mollit est sint laboris
            labore et amet. In irure fugiat dolore et duis nulla exercitation
            excepteur irure ullamco labore enim.
          </p>
          <p>
            Ipsum consequat ut magna Lorem duis deserunt non nulla aliquip
            cillum cillum velit anim. Ex veniam ad excepteur mollit in sunt ex
            non.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/MyImg.jpeg"
            style={{ borderRadius: "10px", width: "400px", height: "400px" }}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Link target="_blank" to="https://twitter.com/the_work_of_art">
            <TwitterIcon className={iconSvg} />
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <Link target="_blank" to="https://www.youtube.com/@mixedreality650">
            <Youtube className={iconSvg} />
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <Link target="_blank" to="https://www.linkedin.com/in/arjkashyap/">
            <Linkedin className={iconSvg} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo pageTitle="Home Page" />;

// Step 3: Export your component
export default IndexPage;
