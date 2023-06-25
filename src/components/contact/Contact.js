import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import phone from "./phone.png";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./custom.module.css";

const data = [
  {
    id: "1",
    title: "Phone",
    heading1: "(913) 756-3126",
    heading2: "(921) 557-1203",
    icon: <PhoneIcon className={styles.Icon} />,
  },
  {
    id: "2",
    title: "Email",
    heading1: "petopia@example.com",
    heading2: "petopia@email.com",
    icon: <MailIcon className={styles.Icon} />,
  },
  {
    id: "3",
    title: "Address",
    heading1: "17 Parkman Place, 2122",
    heading2: "United States",
    icon: <LocationOnIcon className={styles.Icon} />,
  },
  {
    id: "4",
    title: "Open Hours",
    heading1: "Mon - Fri: 7am - 6pm",
    heading2: "Saturday: 9am - 4pm",
    icon: <AccessTimeIcon className={styles.Icon} />,
  },
];

const Contact = () => {
  return (
    <Box
      sx={{
        background: "#FBF9FF",
        p: "30px",
      }}
    >
      <Box>
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
              OUR CONTACTS
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "#0B0417",
              }}
            >
              Latest Contacts
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
              }}
            >
              Massa enim nec dui nunc mattis enim ut tellus
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          spacing={1}
          sx={{
            mt: "50px",
          }}
        >
          {data &&
            data?.map((v, i) => {
              return (
                <Grid item lg={3} md={3} sm={4} xs={12}>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        width: "90%",
                        height: "120px",
                        borderRadius: "5px",
                        mt: { lg: "0px", md: "0px", sm: "30px", xs: "30px" },
                      }}
                      className={styles.MainBox}
                    >
                      <Box
                        sx={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          top: -30,
                          right: { lg: -120, md: -80, sm: -80, xs: -140 },
                        }}
                        className={styles.BadgeBox}
                      >
                        {/* <img src={phone} width="20px" /> */}
                        {v?.icon}
                      </Box>
                      <Box
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                          }}
                        >
                          {v?.title}
                        </Typography>
                        <Typography variant="body2">{v?.heading1}</Typography>
                        <Typography variant="body2">{v?.heading2}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
