import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Section1 = () => {
  const icons = [
    {
      path: "/images/icon-online.svg",
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      path: "/images/icon-budgeting.svg",
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you are closr to hitting your limits.",
    },
    {
      path: "/images/icon-onboarding.svg",
      title: "Fast Onboarding",
      text: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      path: "/images/icon-api.svg",
      title: "Open API",
      text: "Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <Box className="bg-gray-300 p-28 md:mt-0 mt-[500px]">
      <Typography className="font-medium text-3xl my-5">
        Why choose Easybank ?
      </Typography>
      <Typography className="font-normal text-md">
        We leverage Open Banking to turn your bank account into your financial
        hub.
      </Typography>
      <Typography className="font-normal text-md">
        Control your finances like never before.
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }} // Column for mobile and row for desktop
        alignItems="left"
        justifyContent="left"
        className="mt-[50px]"
      >
        {icons.map((item, index) => (
          <Box
            key={index}
            p={2}
            textAlign="left"
            display="flex"
            flexDirection="column"
            alignItems="left"
            className="max-w-[200px]"
          >
            <img
              src={item.path}
              alt="Icon"
              style={{ width: "64px", height: "64px" }} // Adjust the size as needed
              className="my-4"
            />
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body1" className=" my-4">
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section1;
