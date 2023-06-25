import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FbImg from "./fb.png";
import Insta from "./insta.png";
import Twitter from "./twitter.png";
import whatsp from "./whatsapp.png";
import ph from "./phone-alt.png";
import env from "./envelope.png";

const Topbar = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#9C5BF5",
          display: { lg: "block", md: "block", sm: "block", xs: "none" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            pl: "40px",
            pr: "40px",
          }}
        >
          <Box>
            <IconButton>
              <img src={FbImg} />
            </IconButton>
            <IconButton>
              <img src={Insta} />
            </IconButton>
            <IconButton>
              <img src={Twitter} />
            </IconButton>
            <IconButton>
              <img src={whatsp} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
                mr: "20px",
              }}
            >
              <Box>
                <img src={ph} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "13px", color: "white", ml: "9px" }}
                >
                  0000 - 123456789
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
              }}
            >
              <Box>
                <img src={env} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "13px", color: "white", ml: "9px" }}
                >
                  info@example.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Topbar;
