"use client";
import { Typography } from "@material-ui/core";
import {
  Email,
  LinkedIn,
  LocalPhone,
  LocationOn,
  Twitter,
} from "@mui/icons-material";
import Container from "../Container/Container";

const Footer: React.FC = () => {
  return (
    // <Container>
    <footer
      style={{
        backgroundColor: "#2D3047",
        color: "#fff",
        padding: " 50px  0px",
        height: "90vh",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // gap: "100px",
            }}
          >
            <div>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Book Trucks On Transport Area
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "18px", width: "43vw" }}
              >
                TransportArea is your digital transporter for booking Full-Truck
                Loads across India. Enjoy instant credits upto ₹5,00,000 and
                book your first truck now.
              </Typography>
            </div>
            <div>
              <img
                src="https://stockarea.io/assets/user/images/footer/google-play-badge.png"
                alt="playstore"
                style={{ height: "15vh" }}
              />
            </div>
          </div>
          {/* <br style={{ border: "1px solid white" }} /> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <img
                  src="https://stockarea.io/assets/user/images/footer/stockarea-logo.png"
                  alt="logo"
                  style={{ height: "5vh" }}
                />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <LocationOn />
                <Typography style={{ width: "15vw" }}>
                  5th Floor, Kuppu Arcade, Venkatanarayana Rd, T. Nagar,
                  Chennai, Tamil Nadu
                </Typography>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Email />
                <Typography>hello@stockarea.io</Typography>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <LocalPhone />
                <Typography>+91 123-456-789</Typography>
              </div>
              <div style={{ display: "flex", gap: "30px" }}>
                <LinkedIn />
                <Twitter />
                <Email />
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Solutions
              </Typography>
              <Typography>Fulfillment</Typography>
              <Typography>Storage</Typography>
              <Typography>Lease Space</Typography>
              <Typography>WPR</Typography>
              <Typography>Warehouse provider</Typography>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Resources
              </Typography>
              <Typography>Quick Guides</Typography>
              <Typography>Blog</Typography>
              <Typography>FAQ's</Typography>
              <Typography>Glossary</Typography>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Company
              </Typography>
              <Typography>About Us</Typography>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{ color: "gray", fontSize: "15px", fontWeight: "bold" }}
            >
              &copy; 2023 Meinigar Technologies Private Limited. All rights
              reserved.
            </Typography>
            <div style={{ display: "flex", gap: "30px" }}>
              <Typography
                style={{ color: "gray", fontSize: "15px", fontWeight: "bold" }}
              >
                Terms of Service
              </Typography>
              <Typography
                style={{ color: "gray", fontSize: "15px", fontWeight: "bold" }}
              >
                Privacy Policy
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </footer>
    // </Container>
  );
};

export default Footer;
