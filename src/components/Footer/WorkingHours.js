import { Box, Typography } from "@mui/material";
import React from "react";

const WorkingHours = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            color: "#9C5BF5",
            fontWeight: "bold",
          }}
        >
          Working Hours
        </Typography>
      </Box>
      <Box
        sx={{
          width: { lg: "60%", md: "72%", sm: "25%", xs: "60%" },
          backgroundColor: "#FBF9FF",
          p: "20px",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box>
            <Typography variant="body2">Mon - Fri:</Typography>
          </Box>
          <Box sx={{ ml: "30px" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              7am – 6pm
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box>
            <Typography variant="body2">Saturday:</Typography>
          </Box>
          <Box sx={{ ml: "30px" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              9am – 4pm
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box>
            <Typography variant="body2">Sunday:</Typography>
          </Box>
          <Box sx={{ ml: "39px" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Closed
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkingHours;
