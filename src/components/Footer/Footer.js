import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Info from "./Info";
import WorkingHours from "./WorkingHours";
import UsefullLink from "./UsefullLink";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        pr: "30px",
        pl: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          alignItems: "start",
          pt: "50px",
        }}
      >
        <Box sx={{ width: { lg: "25%", md: "25%", sm: "100%", xs: "100%" } }}>
          <Info />
        </Box>
        <Box sx={{ width: { lg: "25%", md: "25%", sm: "100%", xs: "100%" } }}>
          <WorkingHours />
        </Box>
        <Box sx={{ width: { lg: "25%", md: "25%", sm: "100%", xs: "100%" } }}>
          <UsefullLink />
        </Box>
        <Box sx={{ width: { lg: "25%", md: "25%", sm: "100%", xs: "100%" } }}>
          <Newsletter />
        </Box>
      </Box>
      <Box sx={{ mt: "30px" }}>
        <Divider />
        <Box sx={{ textAlign: "center", mt: "20px", pb: "20px" }}>
          <Typography
            variant="body2"
            sx={{
              color: "#675D6B",
            }}
          >
            NOOT © All rights reserved Copyrights 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
