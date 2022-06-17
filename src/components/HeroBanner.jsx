import { Box, Button, Typography } from "@mui/material";
import React from "react";
import banner from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "200px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="26px"
    >
      <Typography
        variant="h1"
        color="#ff2625"
        fontSize="26px"
        fontWeight="600"
        mb={2}
      >
        Fitness Club
      </Typography>
      <Typography
        variant="h1"
        fontSize="26px"
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={2}
        letterSpacing={2}
      >
        Sweet,Smile
        <br />
        and Repeat
      </Typography>
      <Typography
        variant="h1"
        color="gray"
        fontSize="22px"
        fontWeight="600"
        lineHeight="35px"
        mb={2}
      >
        Check out the most effective exercises
        <br />
        and Repeat
      </Typography>
      <Button variant="contained" color="error" sx={{ padding: "10px" }}>
        Explore Exercices
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        exercise
      </Typography>
      <img src={banner} alt="" position="absolute" className="hero-banner" />
    </Box>
  );
};

export default HeroBanner;
