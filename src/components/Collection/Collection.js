import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import pet1 from "./pet1.png";
import pet2 from "./pet2.png";
import pet3 from "./pet3.png";
import styles from "./custom.module.css";

const Collection = () => {
  return (
    <Box>
      <Box
        sx={{
          mt: "60px",
          mb: "100px",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            pr: "30px",
            pl: "30px",
          }}
        >
          <Grid item lg={7} md={7} sm={6} xs={12}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#FCDCB5",
                // p: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: "30px",
                }}
              >
                <Box></Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      //   color: "#7C58D3",
                      backgroundColor: "#7C58D3",
                      "&:hover": {
                        backgroundColor: "#7C58D3",
                      },
                    }}
                  >
                    Up to 40% Off
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  p: "30px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#0B0417",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    Сheck Out Our Specials
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1C103B",
                      fontSize: "15px",
                      //   fontWeight: "bold",
                    }}
                  >
                    Massa placerat duis ultricies lacus. Aliquet bibendum enim
                    facilisis gravida neque convallis
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      textTransform: "capitalize",
                      color: "#7C58D3",
                      p: "0px",
                      m: "0px",
                      background: "transparent",
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Shop Now
                  </Button>
                </Box>
                <Box>
                  <img
                    src={pet1}
                    // width="300px"
                    // style={{
                    //   objectFit: "cover",
                    // }}
                    className={styles.ImgStyle}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <Grid container spacing={5}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box
                  sx={{
                    width: "96%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    height: "210px",
                    backgroundColor: "#ffda47",
                    borderRadius: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      // height: "100px",
                      // backgroundColor: "#ffda47",
                    }}
                  >
                    <Box
                      sx={{
                        p: "20px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#0B0417",
                            fontSize: "35px",
                            fontWeight: "bold",
                          }}
                        >
                          Luxury Fashion Collection
                        </Typography>
                        <Box>
                          <Button
                            variant="text"
                            sx={{
                              textTransform: "capitalize",
                              color: "#7C58D3",
                              p: "0px",
                              m: "0px",
                              background: "transparent",
                            }}
                            endIcon={<ArrowForwardIcon />}
                          >
                            Shop Now
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      // right: 100,
                      top: -7,
                      left: 13,
                    }}
                  >
                    <img src={pet2} width="150px" height="220px" />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box
                  sx={{
                    width: "96%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    height: "210px",
                    backgroundColor: "#ffda47",
                    borderRadius: "5px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      // height: "100px",
                      // backgroundColor: "#ffda47",
                    }}
                  >
                    <Box
                      sx={{
                        p: "20px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#0B0417",
                            fontSize: "35px",
                            fontWeight: "bold",
                          }}
                        >
                          Luxury Fashion Collection
                        </Typography>
                        <Box>
                          <Button
                            variant="text"
                            sx={{
                              textTransform: "capitalize",
                              color: "#7C58D3",
                              p: "0px",
                              m: "0px",
                              background: "transparent",
                            }}
                            endIcon={<ArrowForwardIcon />}
                          >
                            Shop Now
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      // right: 100,
                      top: -7,
                      left: 13,
                    }}
                  >
                    <img src={pet3} width="150px" height="220px" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* <Box
              sx={{
                width: "96%",
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                height: "180px",
                backgroundColor: "#ffda47",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  // height: "100px",
                  // backgroundColor: "#ffda47",
                }}
              >
                <Box
                  sx={{
                    p: "20px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#0B0417",
                        fontSize: "35px",
                        fontWeight: "bold",
                      }}
                    >
                      Luxury Fashion Collection
                    </Typography>
                    <Box>
                      <Button
                        variant="text"
                        sx={{
                          textTransform: "capitalize",
                          color: "#7C58D3",
                          p: "0px",
                          m: "0px",
                          background: "transparent",
                        }}
                        endIcon={<ArrowForwardIcon />}
                      >
                        Shop Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  // right: 100,
                  top: -18,
                  left: 13,
                }}
              >
                <img src={pet2} width="150px" />
              </Box>
            </Box> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Collection;
