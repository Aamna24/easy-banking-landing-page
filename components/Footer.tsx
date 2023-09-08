import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, List, ListItemText } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      className="bg-gray-700 min-h-[200px] px-12 py-6"
      display="flex"
      justifyContent="space-between"
    >
      <Container className="max-w-[1488px]">
        <Grid container>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Image
              src="/images/logo-white.svg"
              alt="easybank logo"
              loading="lazy"
              width="177"
              height="35"
            />
          </Grid>
          <Grid container item xs={12} sm={8} md={8} lg={8}>
            <Grid container item xs={12} sm={3} md={3} lg={3}>
              <List>
                <ListItemText>
                  <Link href="#" className=" text-white  text-[16px]">
                    About Us
                  </Link>
                </ListItemText>
                <ListItemText>
                  <Link href="#" className=" text-white  text-[16px]">
                    Contact
                  </Link>
                </ListItemText>
                <ListItemText>
                  <Link href="#" className=" text-white text-[16px]">
                    Blog
                  </Link>
                </ListItemText>
              </List>
            </Grid>
            <Grid container item xs={12} sm={3} md={3} lg={3}>
              <List>
                <ListItemText>
                  <Link href="#" className=" text-white text-[16px]">
                    Careers
                  </Link>
                </ListItemText>
                <ListItemText>
                  <Link href="#" className=" text-white text-[16px]">
                    Support
                  </Link>
                </ListItemText>
                <ListItemText>
                  <Link href="#" className=" text-white text-[16px]">
                    Privacy Policy
                  </Link>
                </ListItemText>
              </List>
            </Grid>
            <Grid container item xs={12} sm={3} md={3} lg={3}>
              <List>
                <ListItemText>
                  <Link href="#" className=" text-white text-[16px]">
                    Help
                  </Link>
                </ListItemText>
                <ListItemText>
                  <Link href="#" className=" text-white text-[16px]">
                    FAQs
                  </Link>
                </ListItemText>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
