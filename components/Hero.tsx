import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }} // Column for mobile and row for desktop
      alignItems="center"
      className="mt-30 p-10 max-h-[500px]"
      position="relative"
      zIndex={0}
    >
      {/* Text */}
      <Box
        order={{ xs: 2, md: 1 }} // Change order for mobile and desktop
        p={2}
        textAlign={{ xs: "center", md: "left" }} // Center text in mobile and left-align in desktop
        className="max-w-[600px]"
      >
        <Typography variant="h2" className="max-w-[500px] mb-5">
          Next Generation Digital Banking
        </Typography>
        <Typography variant="body1">
          Take your financial life online. Your EasyBank account will be a one
          stop-shop solution for spending, saving, budgeting, investing and much
          more.
        </Typography>
      </Box>
      {/* Image */}
      <Box
        order={{ xs: 1, md: 2 }} // Change order for mobile and desktop
        p={2}
      >
        <img
          src="/images/image-mockups.png"
          alt="Your Image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
