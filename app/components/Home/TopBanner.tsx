"use client";
import React from "react";
import Footer from "../Footer";
import { Button, Typography } from "@material-ui/core";
import Container from "../Container/Container";
import { useRouter } from "next/navigation";
import Header from "../Header";
import Solution from "./Solution";

const styles = {
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
  bannerHead: {
    "@media (max-width: 768px)": {
      fontSize: "35px",
    },
  },
  bannerCaption: {
    "@media (max-width: 768px)": {
      fontSize: "18px",
    },
  },
};

const TopBanner = () => {
  const router = useRouter();

  return (
    <>
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
              style={{
                ...styles.BannerSection,
                justifyContent: "center",
                height: "100%",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "5% 0%",
                width: "40vw",
              }}
            >
              <p
                style={{
                  ...styles.bannerHead,
                  fontWeight: "bolder",
                  fontSize: "40px",
                }}
              >
                Supply Chain Solutions to Design, Execute & Optimise your
                Inventory Flow
              </p>
              <p
                style={{
                  ...styles.bannerCaption,
                  fontSize: "20px",
                  color: "#C8C8C8",
                  fontWeight: 500,
                }}
              >
                We are your Tech-enabled partner for storage & movement of goods
                across India and Globe.
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "100px" }}
              >
                <button
                  onClick={() => router.push("/contact-us")}
                  style={{
                    background: "#cf5435",
                    color: "white",
                    padding: "13px 40px",
                    fontWeight: "bold",
                    fontSize: "19px",
                    textTransform: "capitalize",
                    letterSpacing: "1px",
                    border: "none",
                    borderRadius: "5px",
                    height: "60px",
                  }}
                >
                  Talk To Us
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Solution />
      <Footer />
    </>
  );
};

export default TopBanner;
