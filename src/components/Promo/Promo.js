import {
  Box,
  Button,
  OutlinedInput,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";
import promo from "./promo.png";
import pet2 from "./pet2.png";
import pet1 from "./pet1.png";
import { useTheme, styled } from "@mui/material/styles";
import styles from "../HeroSection/custom.module.css";

const CssTextField = styled(TextField)({
  // marginTop: '10px',
  height: "56px",
  "& label.Mui-focused": {
    color: "white",
    height: "56px",
  },
  "& .MuiOutlinedInput-root": {
    height: "50px",
    "& fieldset": {
      borderColor: "white",
      color: "white",
      height: "56px",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:before": {
      color: "white",
      height: "56px",
      // background: "#414141",
    },

    "&:hover fieldset": {
      borderColor: "#CDCCCE",
      transition: "border-color 0.5s ease",
      height: "56px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#CDCCCE",
      height: "56px",
    },
    "&  #customID": {
      color: "white",
      height: "56px",
      // top: "-20px",
    },
  },
});

const Promo = () => {
  return (
    <Box
      sx={{
        pr: "30px",
        pl: "30px",
        mt: "100px",
        mb: "100px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "360px",
          backgroundImage: `url(${promo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "6px",
        }}
      >
        <Box
          sx={{
            height: "360px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={pet2} className={styles.PetImg} />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { lg: "30px", md: "25px", sm: "25px", xs: "12px" },
                fontWeight: "bold",
              }}
            >
              Get 20% Off Your First Purchase When You Use Petco Credit Card
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { lg: "20px", md: "15px", sm: "15px", xs: "10px" },
              }}
            >
              Sapien nec sagittis aliquam malesuada bibendum arcu vitae
              elementum. Ligula ullamcorper malesuada proin libero nunc
              consequat interdum varius sit.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column",
                },
                alignItems: "center",
                mt: "16px",
              }}
            >
              <Box>
                <CssTextField
                  type="text"
                  variant="outlined"
                  placeholder="Type your Email"
                  fullWidth
                  id="customID"
                />
              </Box>
              <Box
                sx={{
                  ml: "10px",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "capitalize",
                    background: "#FFDA47",
                    color: "black",
                    height: "55px",
                    "&:hover": {
                      background: "#FFDA47",
                      color: "black",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <img src={pet1} className={styles.PetImg} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Promo;
