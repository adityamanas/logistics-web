"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DragHandleRounded, LocalPhone } from "@mui/icons-material";
// import logo from "../../public/images/logo.png";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import "./Header.scss";
import { useRouter } from "next/navigation";
import Container from "../Container/Container";
import useDimension from "@/app/customHooks/useDimensionHook";
import Hambug from "../../../public/images/hambug.svg";
import TelIcon from "../../../public/images/telIcon.png";

interface HeaderProps {
  // onContactUsClick: () => void;
}

const useStyles = makeStyles({
  navbar: {
    padding: "0px",
    display: "none",
    justifyContent: "space-around",
    gap: "40px",
    "@media (max-width: 768px)": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  desktopNavbar: {
    padding: "0px",
    background: "#cf5435",
    maxHeight: "64px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  getStartedButton: {
    color: "white",
    padding: "13px 40px",
    border: "1px solid white",
    fontWeight: "bold",
    fontSize: "19px",
    textTransform: "capitalize",
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "white",
      color: "#ED3232",
    },
    "@media (max-width:768px)": {
      margin: " 0px 12px",
      marginBottom: "12px",
    },
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  menuListItem: {
    "@media (max-width:768px)": {
      flexDirection: "column!important",
      paddingTop: "12px",
      background: "#cf5435",
      "& h6": {
        paddingLeft: "12px",
        "&:hover": {
          backgroundColor: "white",
          color: "#ED3232",
        },
      },
    },
  },
});

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width, height } = useDimension();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  //   console.log(width, "widthConsole");

  return (
    <div style={{ background: "#F5F5FA" }}>
      <Container>
        <a href="tel:+9112345678" className={"headercontact"}>
          <LocalPhone className={"phoneIcon"} />
          <p className={"number"} style={{ color: "black" }}>
            +91 12345678
          </p>
        </a>
      </Container>
      <div
        style={{
          background: " #cf5435",
          position:"relative"
        }}
      >
        <Container>
          {/* Desktop Header */}
          {width > 768 && (
            <div className="desktopHeader">
              <div className="deskLogo">
                <Image
                  onClick={() => {
                    router.push("/");
                  }}
                  alt="logo"
                  src={logo}
                  width={50}
                  height={50}
                />
              </div>
              <div style={{ display: "flex", gap: "51px" }}>
                <h6
                  //   variant="h6"
                  style={{
                    color: "white",
                    fontSize: "15px",
                    letterSpacing: "0.2px",
                  }}
                >
                  Products
                </h6>
                <h6
                  style={{
                    color: "white",
                    fontSize: "15px",
                    letterSpacing: "0.2px",
                  }}
                >
                  Network
                </h6>
                <h6
                  style={{
                    color: "white",
                    fontSize: "14px",
                    letterSpacing: "0.2px",
                  }}
                >
                  Services
                </h6>
                <h6
                  style={{
                    color: "white",
                    fontSize: "14px",
                    letterSpacing: "0.2px",
                  }}
                >
                  Resources
                </h6>
              </div>
              <button
                onClick={() => {
                  router.push("/contact-us");
                }}
                className={"getStartedButton"}
              >
                <p>Contact Us</p>
              </button>
            </div>
          )}

          {/* Mobile Header */}
          <div className={"navbar"}>
            {/* <IconButton color="inherit" > */}
            <div className="iconMenuBtn" onClick={toggleMobileMenu}>
              <Image alt="logo" src={Hambug} width={30} height={30} />
            </div>
            {/* </IconButton> */}

            <Image alt="logo" src={logo} className={"deskLogo"} />
            <div className="iconMenuBtn">
              <Image alt="logo" src={TelIcon} width={30} height={30} />
            </div>
          </div>
          {width < 768 && ""}
        </Container>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`headerDrop`}>
            <h6
              style={{
                color: "white",
                fontSize: "14px",
                letterSpacing: "0.2px",
              }}
            >
              Products
            </h6>
            <h6
              style={{
                color: "white",
                fontSize: "14px",
                letterSpacing: "0.2px",
              }}
            >
              Network
            </h6>
            <h6
              style={{
                color: "white",
                fontSize: "14px",
                letterSpacing: "0.2px",
              }}
            >
              Services
            </h6>
            <h6
              style={{
                color: "white",
                fontSize: "14px",
                letterSpacing: "0.2px",
              }}
            >
              Resources
            </h6>
            {/* Add other menu items as needed */}
            <button className={"getStartedButton"}>
              <Link
                href="/contact-us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>Contact Us</p>
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
