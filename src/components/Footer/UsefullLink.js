import { Box, Typography } from "@mui/material";
import React from "react";
import "./custom.css";

const UsefullLink = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            color: "#9C5BF5",
            fontWeight: "bold",
          }}
        >
          Useful Links
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Shop</li>
          </ul>
        </Box>
        <Box>
          <ul>
            <li>FAQ</li>
            <li>Gallery</li>
            <li>Delivery</li>
            <li>Sales</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default UsefullLink;
