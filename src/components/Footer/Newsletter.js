import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import facebook from "./fb.png";
import twitter from "./twiter.png";
import insta from "./insta.png";
import whatsap from "./whatsap.png";

const CssTextField = styled(TextField)({
  // marginTop: '10px',
  height: "56px",
  "& label.Mui-focused": {
    color: "black",
    height: "56px",
  },
  "& .MuiOutlinedInput-root": {
    height: "50px",
    "& fieldset": {
      borderColor: "#CDCCCE",
      color: "black",
      height: "56px",
      //   background: "white",
      //   backgroundColor: "white",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:before": {
      color: "black",
      height: "56px",
      // background: "#414141",
      //   background: "white",
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
      color: "black",
      height: "56px",
      // top: "-20px",
    },
  },
});

const Newsletter = () => {
  const [value, setValue] = useState("");
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            color: "#9C5BF5",
            fontWeight: "bold",
          }}
        >
          Newsletter
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">
          Be first in the queue! Get our latest news straight to your inbox.
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
          <CssTextField
            type="text"
            variant="outlined"
            placeholder="Email"
            fullWidth
            id="customID"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Box>
        <Box sx={{ ml: "20px" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "capitalize",
              background: "#7C58D3",
              color: "black",
              height: "53px",
              "&:hover": {
                background: "#7C58D3",
                color: "black",
              },
            }}
          >
            <ArrowForwardIcon sx={{ color: "white" }} />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box>
          <IconButton>
            <img src={facebook} />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <img src={insta} />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <img src={twitter} />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <img src={whatsap} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
