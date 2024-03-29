"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DragHandleRounded, LocalPhone } from "@mui/icons-material";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Container from "./Container/Container";
import { useRouter } from "next/navigation";

interface HeaderProps {
  // onContactUsClick: () => void;
}

const useStyles = makeStyles({
  headercontact: {
    textDecoration: "none",
    color: "#cf5435",
    fontSize: "14px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: "76%",
    gap: "10px",
    height: "50px",
  },
  number: {
    color: "black",
    fontSize: "14px",
    "@media (max-width: 768px)": {
      fontSize: "7px",
    },
  },
  phoneIcon: {
    "@media (max-width: 768px)": {
      fontSize: "smaller",
    },
  },
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // <AppBar position="static" style={{ background: "#F5F5FA" }}>
    <div style={{ background: "#F5F5FA" }}>
      <Container>
        <a href="tel:+9112345678" className={classes.headercontact}>
          <LocalPhone className={classes.phoneIcon} />
          <Typography className={classes.number} style={{ color: "black" }}>
            +91 12345678
          </Typography>
        </a>
      </Container>
      <div
        style={{
          background: " #cf5435",
        }}
      >
        <Container>
          {/* Desktop Header */}
          {/* <Toolbar className={classes.desktopNavbar}> */}
          <div className={classes.desktopNavbar}>
            <div className={classes.logo}>
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
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: "14px",
                  letterSpacing: "0.2px",
                }}
              >
                Products
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: "15px",
                  letterSpacing: "1px",
                }}
              >
                Network
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                Services
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                Resources
              </Typography>
            </div>
            <Button variant="outlined" className={classes.getStartedButton}>
              <Link
                href="/contact-us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography>Contact Us</Typography>
              </Link>
            </Button>{" "}
          </div>

          {/* Mobile Header */}
          {/* <Toolbar className={classes.navbar}> */}
          <div className={classes.navbar}>
            <Image alt="logo" width={50} height={50} src={logo} />
            <IconButton color="inherit" onClick={toggleMobileMenu}>
              <DragHandleRounded />
            </IconButton>

            {/* <LocalPhone /> */}
          </div>
        </Container>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`${classes.navbar} ${classes.menuListItem}`}>
          <Typography variant="h6">Products</Typography>
          <Typography variant="h6">Network</Typography>
          <Typography variant="h6">Services</Typography>
          <Typography variant="h6">Resources</Typography>
          {/* Add other menu items as needed */}
          <Button variant="outlined" className={classes.getStartedButton}>
            <Link
              href="/contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>Contact Us</Typography>
            </Link>
          </Button>{" "}
        </div>
      )}
      {/* </AppBar> */}
    </div>
  );
};

export default Header;
