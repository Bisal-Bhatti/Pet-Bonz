import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import pet1 from "./pet1.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import star from "./star.png";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import dog1 from "./dog1.png";
import dog2 from "./dog2.png";
import dog3 from "./dog3.png";
import dog4 from "./dog4.png";
import dog5 from "./dog5.png";
import dog6 from "./dog6.png";

const data = [
  {
    id: "1",
    MainTitle: "Featured Products",
    subData: [
      {
        id: "1",
        title: "Detachable Gravity Bowl Food Feeder",
        price: "$30.12",
        icon: pet1,
      },
      {
        id: "2",
        title: "Dog Collar for Small, Medium, Large Dogs",
        price: "$16.88",
        icon: dog1,
      },
      {
        id: "3",
        title: "Pink Embossed Spiked Collar",
        price: "$34.98",
        icon: dog2,
      },
    ],
  },
  {
    id: "2",
    MainTitle: "On Sale Products",
    subData: [
      {
        id: "1",
        title: "Black Leather Spike Dog Collar, Small",
        price: "$23.55",
        icon: dog3,
      },
      {
        id: "2",
        title: "Dog Chew Toys for Chewers",
        price: "$8.99",
        icon: dog4,
      },
      {
        id: "3",
        title: "Duck Jerky Strips Dog Treats",
        price: "$32.99",
        icon: dog5,
      },
    ],
  },
  {
    id: "3",
    MainTitle: "Top Rated Products",
    subData: [
      {
        id: "1",
        title: "Carrying Bag for Cats Weighing up to 6 kg",
        price: "$70.43",
        icon: dog6,
      },
      {
        id: "2",
        title: "Rhinestone Pet Collar",
        price: "$35.66",
        icon: dog6,
      },
      {
        id: "3",
        title: "Teeth Cleaning Toy for Dogs",
        price: "$12.98",
        icon: dog6,
      },
    ],
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const product = () => {
  return (
    <Box>
      <Box
        sx={{
          pr: "30px",
          pl: "30px",
        }}
      >
        <Grid
          conatiner
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          }}
        >
          {data &&
            data?.map((val, ind) => {
              return (
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <Box>
                    <Box
                      sx={{
                        mt: "30px",
                        mb: "50px",
                        // mr: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: "bold",
                        }}
                      >
                        {val?.MainTitle}
                      </Typography>
                    </Box>
                    {val?.subData?.map((value, index) => {
                      return (
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              // border: "1px solid red",
                              alignItems: "center",
                              height: "130px",
                            }}
                          >
                            <Box>
                              <img src={value?.icon} />
                            </Box>
                            <Box sx={{ ml: "10px" }}>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: "bold",
                                  }}
                                >
                                  {value?.title}
                                </Typography>
                              </Box>
                              <Box>
                                <Stack direction="row" spacing={0}>
                                  {[1, 2, 3, 4, 5]?.map((v, i) => {
                                    return (
                                      <Item>
                                        <img src={star} />
                                      </Item>
                                    );
                                  })}
                                </Stack>
                              </Box>
                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: "bold",
                                    color: "#7C58D3",
                                  }}
                                >
                                  {value?.price}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          {/* <Divider sx={{ width: "100%" }} /> */}
                        </Box>
                      );
                    })}
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default product;
