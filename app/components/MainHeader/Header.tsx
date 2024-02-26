"use client";
import React, { useState } from "react";
import Link from "next/link";
import { DragHandleRounded, LocalPhone } from "@mui/icons-material";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import "./Header.scss";
import { useRouter } from "next/navigation";
import Container from "../Container/Container";
import useDimension from "@/app/customHooks/useDimensionHook";
import Hambug from "../../../public/images/hambug.svg";
import TelIcon from "../../../public/images/telIcon.png";

interface HeaderProps {
 
}



const Header: React.FC<HeaderProps> = () => {

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
