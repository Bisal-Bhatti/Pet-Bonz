import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "./logo.png";
import phone from "./phone.png";

const Info = () => {
  return (
    <Box>
      <Box>
        <img src={logo} />
      </Box>
      <Box>
        <Typography
          variant="body2"
          sx={
            {
              // fontWeight: "bold",
            }
          }
        >
          Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim
          nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...
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
          <img src={phone} width="35px" />
        </Box>

        <Box sx={{ ml: "10px" }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
            }}
          >
            (913) 756-3126
          </Typography>
          <Typography variant="body2">Got Questions? Call us 24/7</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
