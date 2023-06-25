import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import logo from "./Logo.png";
import cart from "./shopping-cart.png";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          pr: "30px",
          pl: "30px",
        }}
      >
        <Box>
          <img src={logo} alt="logo" width={"60%"} />
        </Box>
        <Box
          sx={{
            mr: "60px",
            display: { lg: "block", md: "block", sm: "block", xs: "none" },
          }}
        >
          <Button
            variant="text"
            sx={{
              textTransform: "capitalize",
              color: "#392C53",
            }}
          >
            Home
          </Button>
          <Button
            variant="text"
            sx={{
              textTransform: "capitalize",
              color: "#392C53",
            }}
          >
            Services
          </Button>
          <Button
            variant="text"
            sx={{
              textTransform: "capitalize",
              color: "#392C53",
            }}
          >
            Shop
          </Button>
          <Button
            variant="text"
            sx={{
              textTransform: "capitalize",
              color: "#DCFF02",
            }}
          >
            Blog
          </Button>
          <Button
            variant="text"
            sx={{
              textTransform: "capitalize",
              color: "#DCFF02",
            }}
          >
            Pages
          </Button>
        </Box>

        <Box
          sx={{
            display: { lg: "block", md: "block", sm: "block", xs: "none" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              color: "#392C53",
              background: "white",
              boxShadow: "none",
              "&:hover": {
                background: "white",
                boxShadow: "none",
              },
            }}
            startIcon={<img src={cart} />}
          >
            (1 item)
          </Button>
        </Box>
        <Box
          sx={{
            display: { lg: "none", md: "none", sm: "none", xs: "block" },
          }}
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
