import { Box, Typography } from "@mui/material";
import React from "react";
import bg from "./bg (1).png";
import pet from "./pets.png";
import medal from "./petMedal.png";
import foodCane from "./canned-food.png";
import bag from "./shopping-bag.png";

const data = [
  {
    id: "1",
    title: "120+",
    desp: "Sutisfide Cliens",
    icon: pet,
  },
  {
    id: "2",
    title: "20+",
    desp: "Years Experience",
    icon: medal,
  },
  {
    id: "3",
    title: "70+",
    desp: "Brands Available",
    icon: foodCane,
  },
  {
    id: "4",
    title: "200+",
    desp: "Products for pets",
    icon: bag,
  },
];

const Counter = () => {
  return (
    <Box
      sx={{
        mb: "100px",
        mt: "100px",
        pr: "30px",
        pl: "30px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { lg: "200px", md: "200px", sm: "auto", xs: "auto" },
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {data &&
            data?.map((v, i) => {
              return (
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    p: "30px",
                  }}
                >
                  <Box>
                    <img src={v?.icon} />
                  </Box>
                  <Box sx={{ ml: "10px" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "30px",
                      }}
                    >
                      {v?.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {v?.desp}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
