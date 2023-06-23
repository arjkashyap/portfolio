import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  subHeading,
  iconSvg,
  iconSvgContainer,
  myImg,
  flexContainer,
} from "../styles/index.module.css";
import { header } from "../styles/common.module.css";
import Seo from "../components/seo";
import { theme } from "../theme";
import { color } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import TwitterIcon from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/github.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Expereince from "../components/experience";
import ProjectList from "../components/projectlist";

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
    <ThemeProvider theme={theme}>
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
            <div style={{ display: "flex" }}>
              <p>
                Reach out to me on my{" "}
                <Link
                  to="https://www.linktr.ee/arjkashyap"
                  target="_blank"
                  style={{ color: color.primary }}
                >
                  socials
                </Link>
              </p>
              <StaticImage
                src="../images/down-right-arrow.png"
                alt="down right arrow"
                style={{ margin: "0.4rem" }}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <StaticImage
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/MyImg.jpeg"
              className={myImg}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={iconSvgContainer}>
            <div>
              <Link target="_blank" to="https://twitter.com/the_work_of_art">
                <TwitterIcon className={iconSvg} />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                to="https://www.youtube.com/@mixedreality650"
              >
                <Youtube className={iconSvg} />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/arjkashyap/"
              >
                <Linkedin className={iconSvg} />
              </Link>
            </div>
            <div>
              <Link target="_blank" to="https://www.github.com/arjkashyap">
                <Github className={iconSvg} />
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <p>
              Stay updated with personalized content by joining my newsletter!
              Get access to diverse blogs on technology, career & general
              insights. Stay updated on YouTube, ensuring you never miss out on
              exciting new videos.
            </p>
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              style={{ width: "90%" }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ width: "90%", marginTop: "0.5rem" }}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <div style={{ flex: 1, marginRight: "1rem" }}>
            <h1 style={{ textDecoration: "underline" }} className={header}>
              Professional Experience
            </h1>
            <h6 className={subHeading}>
              Checkout my{" "}
              <Link to="/resume" style={{ color: color.primary }}>
                resume
              </Link>{" "}
              to get a better glimpse
            </h6>
            <Expereince />
          </div>
          <div style={{ flex: 1, marginLeft: "1rem" }}>
            <h1 style={{ textDecoration: "underline" }} className={header}>
              Personal Projects
            </h1>
            <h6 className={subHeading}>
              Find all my side projects on{" "}
              <Link
                to="https://github.com/arjkashyap"
                style={{ color: color.primary }}
              >
                github.com/arjkashyap
              </Link>{" "}
            </h6>
            <ProjectList />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo pageTitle="Home Page" />;

// Step 3: Export your component
export default IndexPage;
