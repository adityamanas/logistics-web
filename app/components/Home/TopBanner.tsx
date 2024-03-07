"use client";
import React from "react";
import Footer from "../MainFooter/Footer";
import { Button, Typography } from "@material-ui/core";
import Container from "../Container/Container";
import { useRouter } from "next/navigation";
// import Header from "../Header";
import Solution from "./Solution/Solution";
import Header from "../MainHeader/Header";
import "./Home.scss";

import Storage from "./Storage/Storage";
import Benefits from "./Benefit/Benefits";
import ServiceSection from "./ServiceSection/ServiceSection";

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
};

const TopBanner = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div
        className="background-container-home"
        style={{
          // backgroundImage: `linear-gradient(140deg,rgba(0,0,0,.75) 52.45%,rgba(0,0,0,.1) 100%)
          // , url('https://stockarea.io/assets/user/images/home/home-cover.png')`,
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
            <div className="topBannerImg">
              <p className="bannerHead">
                Offer comprehensive inventory management solutions, optimizing
                your supply chain flow.
              </p>
              <p className="bannerCaption" style={{}}>
                Serve as your technology-driven ally for storage and logistics
                across India and globally.
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "100px" }}
              >
                <button
                  className="talkToUsBtn"
                  onClick={() => router.push("/contact-us")}
                >
                  Talk To Us
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <ServiceSection />
        <Solution />
        <Benefits />
      </Container>
      <Storage />
      <Footer />
    </>
  );
};

export default TopBanner;
