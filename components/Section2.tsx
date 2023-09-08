import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Section2 = () => {
  const cards = [
    {
      path: "/images/image-restaurant.jpg",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money.",
      text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      path: "/images/image-plane.jpg",
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      path: "/images/image-confetti.jpg",
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ....",
    },
  ];
  return (
    <Box className="p-20 md:mt-0">
      <Typography className="font-medium text-3xl my-5">
        Latest Articles
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }} // Column for mobile and row for desktop
        alignItems="left"
        justifyContent="left"
        className="mt-[50px]"
      >
        {cards.map((item, index) => (
          <Box
            key={index}
            p={2}
            textAlign="left"
            display="flex"
            flexDirection="column"
            alignItems="left"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.path}
                  alt="card image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section2;
