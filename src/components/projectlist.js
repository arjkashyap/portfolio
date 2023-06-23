import React from "react";
import Project from "./project";

const projects = [
  {
    title: "Draw My Code",
    description:
      "A React Web Application for visuzalizing some algorithms. For some programmers, the biggest problem in learning general algorithms is that they are unable to visualize how these algorithms work under the hood. ",
    previewLink: "https://draw-my-code.herokuapp.com/",
    sourceCode: "https://github.com/arjkashyap/Draw-My-Code",
  },
  {
    title: "Compress Me",
    description:
      "Web App for Lossless File Compression. Implemented Huffman algorithms for building text file compression software. Observed up-to average 56% efficiency in compression",
    previewLink: "https://www.youtube.com/watch?v=ouT8fTqci90",
    sourceCode: "https://github.com/arjkashyap/Compress-Me",
  },
  {
    title: "DFA Simulator",
    description:
      "A tool for testing and simulating Deterministic Finite Machines with string inputs ",
    previewLink: "https://arjkashyap.github.io/DFA-simulator/",
    sourceCode: "https://github.com/arjkashyap/DFA-simulator",
  },
  {
    title: "Ekyam",
    description:
      "Web Application for centralizing various business incubator services across the country. This project won Rs 25000 in Smart India Hackathon 2018",
    sourceCode: "https://github.com/arjkashyap/Ekyam",
  },
  {
    title: "PyTaskMaster",
    description:
      "A collection of Python scripts designed to streamline and replace repetitive daily tasks, empowering you to focus on more valuable work",
    sourceCode: "https://github.com/arjkashyap/PyTaskMaster",
  },
  // Add more projects here
];

const ProjectList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          previewLink={project.previewLink}
          sourceCode={project.sourceCode}
        />
      ))}
    </div>
  );
};

export default ProjectList;
