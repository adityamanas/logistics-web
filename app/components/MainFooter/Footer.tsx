"use client";
import { Typography } from "@material-ui/core";
import {
  Email,
  LinkedIn,
  LocalPhone,
  LocationOn,
  MarkEmailRead,
  Twitter,
} from "@mui/icons-material";
import Container from "../Container/Container";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import "./Footer.scss";

// const styles = {
//   footerHeading: {
//     "@media (max-width:768px)": {
//       flexDirection: "column!important",
//       "& h4": {
//         textAlign: "center",
//       },
//       "& h6": {
//         width: "100%!important",
//         padding: "10px 0px",
//       },
//       "& img": {
//         float: "left!important",
//       },
//     },
//   },
//   footerListItemSection: {
//     "@media (max-width:768px)": {
//       flexWrap: "wrap",
//       rowGap: "34px",
//       "& p": {
//         width: "100%!important",
//       },
//     },
//   },
//   footerCopyrightSection: {
//     "@media (max-width:768px)": {
//       flexDirection: "column-reverse!important",
//       textAlign: "center",
//     },
//   },
//   footerConditionPrivacy: {
//     "@media (max-width:768px)": {
//       gap: "0!important",
//       justifyContent: "space-around",
//       paddingBottom: "12px",
//     },
//   },
//   logo: {
//     width: "40px",
//     height: "40px",
//     backgroundColor: "#cf5435",
//   },
// };

const Footer: React.FC = () => {
  return (
    // <Container>
    <footer
      style={{
        backgroundColor: "#2D3047",
        color: "#fff",
        padding: " 50px  0px",
        height: "100%",
      }}
    >
      <Container>
        <div
          style={{
            height: "100%",
            display: "flex",
            gap: "50px",
            flexDirection: "column",
          }}
        >
          <div className="footerContainer">
            <div className="footerContent">
              <h2 style={{ fontWeight: "bold" }}>
                Book Trucks On Transport Area
              </h2>
              <p style={{ width: "43vw", paddingTop: "12px",textAlign:"center" }}>
                TransportArea is your digital transporter for booking Full-Truck
                Loads across India. Enjoy instant credits upto ₹5,00,000 and
                book your first truck now.
              </p>
            </div>
            <div className="footerImage">
              {/* <img
                src="https://stockarea.io/assets/user/images/footer/google-play-badge.png"
                alt="playstore"
                style={{ width: "90%", float: "right" }}
              /> */}
            </div>
          </div>
          {/* <br style={{ border: "1px solid white" }} /> */}
          <div className="footerListItemSection">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
               
                <div
                  style={{
                    backgroundColor: "#cf5435",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <Image alt="logo" src={logo} height={50} width={50} />
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <LocationOn />
                <p style={{ width: "15vw" }}>
                  Plot No. 28, Ground Floor, Blok B, Road No. 2, Pochanpur
                  Extension, New Delhi, 110077
                </p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Email />
                <p>hello@stockarea.io</p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <LocalPhone />
                <p>+91 123-456-789</p>
              </div>
              <div style={{ display: "flex", gap: "30px" }}>
                <LinkedIn />
                <Twitter />
                <Email />
              </div>
            </div>
            <div
              className="footerList"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h6 style={{ fontWeight: "bold", fontSize: "18px" }}>
                Solutions
              </h6>
              <p>Fulfillment</p>
              <p>Storage</p>
              <p>Lease Space</p>
              <p>WPR</p>
              <p>Warehouse provider</p>
            </div>
            <div
              className="footerList"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h6 style={{ fontWeight: "bold", fontSize: "18px" }}>
                Resources
              </h6>
              <p>Quick Guides</p>
              <p>Blog</p>
              <p>FAQ's</p>
              <p>Glossary</p>
            </div>
            <div
              className="footerList"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h6 style={{ fontWeight: "bold", fontSize: "18px" }}>Company</h6>
              <p>About Us</p>
            </div>
          </div>
          <div className="footerCopyrightSection">
            <p style={{ color: "gray", fontSize: "15px", fontWeight: "bold" }}>
              &copy; 2023 369 Logistics. All rights reserved.
            </p>
            <div className="footerConditionPrivacy">
              <p
                style={{ color: "gray", fontSize: "15px", fontWeight: "bold" }}
              >
                Terms of Service
              </p>
              <p
                style={{ color: "gray", fontSize: "15px", fontWeight: "bold" }}
              >
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
    // </Container>
  );
};

export default Footer;
