import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Navbar/Topbar";
import bg from "./bg.png";
import dogImg from "./dog.png";
import styles from "./custom.module.css";

const Hero = () => {
  return (
    <>
      <Box>
        <Topbar />

        <Box
          sx={{
            width: "100%",
            height: "800px",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box sx={{ pt: "20px" }}>
            <Navbar />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              pr: "30px",
              pl: "30px",
              mt: { lg: "10px", md: "10px", sm: "10px", xs: "50px" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#7C58D3",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                We care for your pets
              </Typography>
              <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
                We Help You Care for Animals with Nutrition
              </Typography>
              <Typography sx={{ fontSize: "15px", color: "#1C103B" }}>
                All offers are subject to availability. Ut tortor pretium
                viverra suspendisse potenti nullam ac tortor vitae. Consectetur
                a erat nam at. Potenti nullam ac tortor vitae purus faucibus
                ornare.
              </Typography>
            </Box>
            <Box
              sx={{
                display: { lg: "block", md: "block", sm: "block", xs: "none" },
              }}
            >
              <img src={dogImg} className={styles.ImgCls} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
