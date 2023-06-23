import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link,
} from "@mui/material";

const latestStories = [
  {
    title: "Short History to Nearly Everything: How it changed me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnail: "https://m.media-amazon.com/images/I/61iO6AVIZ-L.jpg",
    link: "#",
  },
  {
    title:
      "Completed Two Years in the Computer Science Industry: Lessons Learned and Insights Gained",
    description:
      "A personal reflection on my two-year journey in the computer science industry, sharing key insights, lessons learned, and growth experienced along the way.",
    thumbnail:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    title: "Namma Begalur. Finding a new home",
    description:
      "Embark on a captivating narrative of my journey to Bengaluru, where I navigated the unfamiliar streets, sought a new home, and finally found solace in this bustling city",
    thumbnail:
      "https://t3.ftcdn.net/jpg/04/86/28/58/360_F_486285886_6gNLgFgckusuTuDPtSMwSrTu9hualPMU.jpg",
    link: "#",
  },
  // Add more articles here...
];

const LatestStories = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      {latestStories.map((story, index) => (
        <Card key={index} style={{ width: "300px", marginBottom: "1rem" }}>
          <CardMedia
            component="img"
            src={story.thumbnail}
            alt={story.title}
            style={{ height: "200px" }}
          />
          <CardContent>
            <Typography variant="h6">{story.title}</Typography>
            <Typography variant="body2">{story.description}</Typography>
            <Link href={story.link} target="_blank" rel="noopener">
              Read more
            </Link>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default LatestStories;
