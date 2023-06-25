import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import walk from "./walk.png";
import groom from "./groompet.png";
import service4 from "./Service-4.png";
import service6 from "./Service-6.png";
import service7 from "./Service-1 (1).png";
import service8 from "./Service-5.png";
import paws from "./paws.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import coloredImg from "./hoverCard.png";
import styles from "./custom.module.css";

const data = [
  {
    id: "1",
    title: "Walking & Sitting",
    desp: "Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi",
    time: "From $15 / hour",
    icon: walk,
  },
  {
    id: "2",
    title: "Pet Grooming",
    desp: "Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam",
    time: "From $39 / complex",
    icon: groom,
  },
  {
    id: "3",
    title: "Pet Training",
    desp: "Aliquam ut porttitor leo a diam sollicitudin tempor  sit amet est placerat ",
    time: "From $27 / hour",
    icon: service4,
  },
  {
    id: "4",
    title: "Pet Taxi",
    desp: "Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit ",
    time: "From $22  / trip",
    icon: service6,
  },
  {
    id: "5",
    title: "Health & Wellness",
    desp: "Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam ",
    time: "From $39/ visit",
    icon: service7,
  },
  {
    id: "6",
    title: "Pet Hotel",
    desp: "Turpis massa sed elementum tempus egestas sed sed risus aliquam  urna cursus eget n",
    time: "From $15 / night",
    icon: service8,
  },
];

const typoColor = {
  color: "white",
};

const Services = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Typography
            sx={{
              color: "#7C58D3",
              fontWeight: "bold",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            OUR SERVICES
          </Typography>
          <Typography
            sx={{
              color: "#0B0417",
              fontWeight: "bold",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            All Pet Care Services
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "30px",
            mb: "100px",
          }}
        >
          <Grid container spacing={2}>
            {data &&
              data?.map((v, i) => {
                return (
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "79%",
                        height: "180px",
                        border: "1px solid #EFEFEF",
                        borderRadius: "5px",
                        backgroundImage: `url(${paws})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        p: "20px",
                        cursor: "pointer",
                        color: "#1C103B",
                        "&:hover": {
                          backgroundImage: `url(${coloredImg})`,
                          color: "white",
                        },
                      }}
                      className={styles.MainBox}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <img src={v?.icon} />
                          </Box>
                          <Box sx={{ ml: "10px" }}>
                            <Typography
                              sx={{
                                // color: "#0E081E",
                                fontWeight: "bold",
                              }}
                            >
                              {v?.title}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              mt: "10px",
                            }}
                          >
                            {v?.desp}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: "bold",
                              mt: "10px",
                            }}
                          >
                            {v?.time}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            mt: "10px",
                            color: "#7C58D3",
                            "&:hover": {
                              color: "#FFDA47",
                            },
                          }}
                        >
                          <Button
                            variant="text"
                            sx={{
                              textTransform: "capitalize",
                              color: "#7C58D3",
                              p: "0px",
                              m: "0px",
                              background: "transparent",
                            }}
                            className={styles.BtnBox}
                            endIcon={<ArrowForwardIcon />}
                          >
                            Get Service
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
