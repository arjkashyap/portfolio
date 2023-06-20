import React from "react";
import { Box, Typography } from "@mui/material";
import { RiBriefcaseLine } from "react-icons/ri";
import InformaticaIcon from "../images/informatica.svg";
import KervIcon from "../images/kerv.svg";
import KeyDisruptors from "../images/keydisruptors.svg";
import { iconSvgSmall } from "../styles/common.module.css";

// Example data for experiences
const experiences = [
  {
    title: "Software Engineer",
    company: "Informatica",
    duration: "July 2022- Present",
    description:
      "As a member of the R&D Cloud Connectivity team, my responsibilities include the development and maintenance of Informatica connectors that are utilized in our IISC data integration platform, as well as other IPC pipelines using Java, Python, and enterprise-level microservices",
    icon: <InformaticaIcon className={iconSvgSmall} />,
  },
  {
    title: "Software Engineer",
    company: " Digital",
    duration: "May 2021- July 2022",
    description:
      "Developing systems for various clients using cutting-edge technologies including .NET Core, Azure, Cosmos DB, Azure Functions, and MS Graph.",
    icon: <KervIcon className={iconSvgSmall} />,
  },
  {
    title: "Software Engineer Intern",
    company: " Digital",
    duration: "Feb 2021 - May 2021",
    description:
      "During my 3-month internship, I took on the challenge of developing an internal application from scratch, which has now become widely used within the organization.",
    icon: <KervIcon className={iconSvgSmall} />,
  },
  {
    title: "Web Developer Intern",
    company: " Key Disruptors Pvt. Ltd.",
    duration: "Feb 2021 - May 2021",
    description:
      "Responsible for developing re-usable web components and adding RSVP functionality to the application using MERN Stack",
    icon: <KeyDisruptors className={iconSvgSmall} />,
  },
  // Add more experiences here...
];

const Expereince = () => {
  return (
    <Box>
      {experiences.map((experience, index) => (
        <Box key={index} marginBottom={2}>
          <Box display="flex" alignItems="center" marginBottom={1}>
            {/* <RiBriefcaseLine size={20} style={{ marginRight: "0.5rem" }} /> */}
            {experience.icon}
            <Typography variant="h6"> {experience.company}</Typography>
          </Box>
          <Typography variant="subtitle1">{experience.title}</Typography>
          <Typography variant="subtitle2">{experience.duration}</Typography>
          <p>{experience.description}</p>
        </Box>
      ))}
    </Box>
  );
};

export default Expereince;
