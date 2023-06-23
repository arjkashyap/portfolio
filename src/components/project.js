import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Project = ({ title, description, previewLink, sourceCode }) => {
  return (
    <Box marginBottom={2}>
      <Typography
        variant="h6"
        style={{ fontFamily: "monospace", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <p>{description}</p>
      <Box display="flex" justifyContent="space-between">
        <Link href={sourceCode} target="_blank" rel="noopener">
          Source Code
        </Link>
        {previewLink ? (
          <Link href={previewLink} target="_blank" rel="noopener">
            Live Demo
          </Link>
        ) : (
          <></>
        )}
      </Box>
      {/* <hr /> */}
      <br />
    </Box>
  );
};

export default Project;
