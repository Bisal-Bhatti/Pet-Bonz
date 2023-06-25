import { Badge, Box, Grid, Typography } from "@mui/material";
import React from "react";
import pet1 from "./pet1.png";
import pet2 from "./pet2.png";
import pet3 from "./pet3.png";
import user from "./user.png";
import calender from "./calendar-day.png";

let data = [
  {
    id: "1",
    auth: "by Corabelle Durrad",
    date: "02.01.2022",
    title: "5 Crazy Things Dogs Do When Left Alone At Home",
    desp: "Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.",
    icon: pet1,
    badgeTitle: "TRAINING",
  },
  {
    id: "2",
    auth: "by Corabelle Durrad",
    date: "02.01.2022",
    title: "Your Dog Desperately Needs From You",
    desp: "Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet ",
    icon: pet2,
    badgeTitle: "PET HEALTH",
  },
  {
    id: "3",
    auth: "by Corabelle Durrad",
    date: "02.01.2022",
    title: "Top Cat Foods to Consider If You Are a First Time Owner",
    desp: "Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum ut tristique et egestas quis",
    icon: pet3,
    badgeTitle: "PET FOOD",
  },
];

const Post = () => {
  return (
    <Box
      sx={{
        mb: "100px",
      }}
    >
      <Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#7C58D3",
            }}
          >
            OUR BLOG
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#0B0417",
            }}
          >
            Latest Post
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "60px",
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
            {data &&
              data?.map((v, i) => {
                return (
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "280px",
                        backgroundImage: `url(${v?.icon})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100px",
                          height: "40px",
                          backgroundColor: "#FFDA47",
                          top: "-1rem",
                          right: { lg: -310, md: -200, sm: -210, xs: -240 },
                          borderRadius: "8px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                          }}
                        >
                          {v?.badgeTitle}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        mt: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <img src={user} />
                        </Box>
                        <Box sx={{ ml: "10px" }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: "bold",
                            }}
                          >
                            {v?.auth}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          ml: "30px",
                        }}
                      >
                        <Box>
                          <img src={calender} />
                        </Box>
                        <Box sx={{ ml: "10px" }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: "bold",
                            }}
                          >
                            {v?.date}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: "bold",
                          mt: "10px",
                        }}
                      >
                        {v?.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: "5px" }}>
                        {v?.desp}
                      </Typography>
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

export default Post;
