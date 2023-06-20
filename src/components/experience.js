import React from "react";
import { Box, Typography } from "@mui/material";
import { RiBriefcaseLine } from "react-icons/ri";

// Example data for experiences
const experiences = [
  {
    title: "Software Engineer",
    company: "ABC Company",
    duration: "2018 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more experiences here...
];

const Expereince = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      {experiences.map((experience, index) => (
        <Box key={index} marginBottom={2}>
          <Box display="flex" alignItems="center" marginBottom={1}>
            <RiBriefcaseLine size={20} style={{ marginRight: "0.5rem" }} />
            <Typography variant="h6">{experience.title}</Typography>
          </Box>
          <Typography variant="subtitle1">{experience.company}</Typography>
          <Typography variant="subtitle2">{experience.duration}</Typography>
          <Typography>{experience.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Expereince;
