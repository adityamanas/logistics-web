"use client";
import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Solution from "./Solution";
import Container from "../Container/Container";
import ContactUsForm from "./ContactUsForm";

const useStyles = makeStyles({
  learnMoreButton: {
    fontSize: "19px",
    cursor: "pointer",
    "&:hover": {
      color: "#ED3232",
    },
  },
});

const TopBanner: React.FC = () => {
  const [showContactUsForm, setShowContactUsForm] = useState(false);
  const classes = useStyles();
  const contactUsFormRef = useRef<HTMLDivElement>(null);

  const handleContactUsClick = () => {
    setShowContactUsForm(true);
    if (contactUsFormRef.current) {
      contactUsFormRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* <Container> */}
      <Header onContactUsClick={handleContactUsClick} />
      <div
        style={{
          backgroundImage: `linear-gradient(140deg,rgba(0,0,0,.75) 52.45%,rgba(0,0,0,.1) 100%), url('https://stockarea.io/assets/user/images/home/home-cover.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
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
              style={{
                justifyContent: "center",
                height: "100%",
                color: "#fff",
                // textAlign: "left",
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                gap: "20px",
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
      <div ref={contactUsFormRef}>{showContactUsForm && <ContactUsForm />}</div>
      <Footer />
      {/* </Container> */}
    </>
  );
};

export default TopBanner;
