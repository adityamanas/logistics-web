"use client";
import React, { useRef, useState } from "react";
import Footer from "../Footer";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Solution from "./Solution";
import Container from "../Container/Container";
import { useRouter } from 'next/navigation'
import Header from "../Header";

const useStyles = makeStyles({
  learnMoreButton: {
    fontSize: "19px",
    cursor: "pointer",
    "&:hover": {
      color: "#ED3232",
    },
  },
  BannerSection: {
    "@media (max-width: 768px)": {
      width: "100%!important",
    },
    padding: "23px 0px",
    "@media (min-width:769px) and (max-width:1024px)": {
      width: "62vw!important",
    },
  },
});

const TopBanner: React.FC = () => {
  const router = useRouter()
  const classes = useStyles();

  return (
    <>
      {/* <Container> */}
      <Header />
      <div
        style={{
          backgroundImage: `linear-gradient(140deg,rgba(0,0,0,.75) 52.45%,rgba(0,0,0,.1) 100%), url('https://stockarea.io/assets/user/images/home/home-cover.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
          }}
        >
          {" "}
          <Container>
            <div
              className={classes.BannerSection}
              style={{
                justifyContent: "center",
                height: "100%",
                color: "#fff",
                // textAlign: "left",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                gap: "20px",
                padding:"5% 0%",
                width: "40vw",
              }}
            >
              <Typography style={{ fontWeight: "bolder", fontSize: "40px" }}>
                Supply Chain Solutions to Design, Execute & Optimise your
                Inventory Flow
              </Typography>
              <Typography
                style={{ fontSize: "20px", color: "#C8C8C8", fontWeight: 500 }}
              >
                We are your Tech-enabled partner for storage & movement of goods
                across India and Globe.
              </Typography>
              <div
                style={{ display: "flex", alignItems: "center", gap: "100px" }}
              >
                <Button
                onClick={()=>{router.push("/contact-us")}}
                  variant="contained"
                  style={{
                    background: "#cf5435",
                    color: "white",
                    padding: "13px 40px",
                    fontWeight: "bold",
                    fontSize: "19px",
                    textTransform: "capitalize",
                    letterSpacing: "1px",
                  }}
                >
                  Talk To Us
                </Button>
                {/* <Typography className={classes.learnMoreButton}>
              Learn More
            </Typography> */}
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Solution />
      {/* <div ref={contactUsFormRef}>{showContactUsForm && <ContactUsForm />}</div> */}
      <Footer />
      {/* </Container> */}
    </>
  );
};

export default TopBanner;
