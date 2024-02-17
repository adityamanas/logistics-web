// import { KeyboardArrowRight } from "@mui/icons-material";
// import { Typography } from "@mui/material";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         height: "60vh",
//         background: "black",
//         display: "flex",
//         padding: "50px",
//         justifyContent: "center",
//         gap: "33px",
//       }}
//     >
//       <div
//         style={{
//           width: "18vw",
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//         }}
//       >
//         <Typography
//           variant="h3"
//           style={{
//             textTransform: "uppercase",
//             fontSize: "22px",
//             fontWeight: "500",
//             fontFamily: "Muli, sans-serif",
//             color: "white",
//             letterSpacing: "1px",
//           }}
//         >
//           ZEPHYR EXPRESS
//         </Typography>
//         <Typography
//           style={{
//             color: "#b4aca8",
//             fontFamily: "Muli, sans-serif",
//             fontSize: "14px",
//           }}
//         >
//           Total Freight Management facilitating door to door logistic services.
//           Endless World, Endless Solutions. Solutions.. that you deserve. We
//           Provide cost-efficient and professional services.
//         </Typography>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <Typography
//           style={{
//             textTransform: "uppercase",
//             fontSize: "16px",
//             fontWeight: "bold",
//             color: "white",
//           }}
//         >
//           USEFUL LINKS
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           HOME
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           ABOUT US
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           TRACKING
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           LOGIN
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           CONTACT
//         </Typography>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <Typography
//           style={{
//             textTransform: "uppercase",
//             fontSize: "16px",
//             fontWeight: "bold",
//             color: "white",
//           }}
//         >
//           OUR SERVICES
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           AIR FREIGHT
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           EXPRESS FREIGHT
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           SEA FREIGHT
//         </Typography>
//         <Typography style={{ color: "#b4aca8", fontSize: "13px" }}>
//           <KeyboardArrowRight style={{ color: "#fd6f41", fontSize: "16px" }} />
//           COURIER & CARGO
//         </Typography>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <Typography
//           style={{
//             textTransform: "uppercase",
//             fontSize: "16px",
//             fontWeight: "bold",
//             color: "white",
//           }}
//         >
//           CONTACT US
//         </Typography>
//         <Typography style={{ color: "#b4aca8" }}>
//           CB-385B, Ring Road Naraina, New Delhi 110028, India
//         </Typography>
//         <Typography style={{ color: "#b4aca8" }}>
//           Phone: +91-89206-31146
//         </Typography>
//         <Typography style={{ color: "#b4aca8" }}>
//           Phone: +91-98731-27666
//         </Typography>
//         <Typography style={{ color: "#b4aca8" }}>
//           Email: ad@zephyrexpress.in
//         </Typography>
//         <Typography style={{ color: "#b4aca8" }}>
//           Email: asd@zephyrexpress.in
//         </Typography>
//       </div>

//       <p>&copy; 2024 Your Company Name</p>
//       {/* <div
//         style={{
//           background: "rgb(77, 70, 67)",
//           height: "12vh",
//           display: "flex",
//           justifyContent: "center",
//           gap: "40%",
//           padding: "28px",
//         }}
//       >
//         <Typography style={{ color: "white", fontSize: "15px" }}>
//           &copy;&nbsp;Copyright{" "}
//           <span style={{ fontWeight: "bold" }}>zephyr express.</span>&nbsp;All
//           Rights Reserved
//         </Typography>
//         <Typography style={{ color: "white", fontSize: "15px" }}>
//           Designed by <span style={{ color: "#f03c02" }}>Zephyr Express</span>
//         </Typography>
//       </div> */}
//     </footer>
//   );
// };

// export default Footer;
// Footer.tsx

"use client";
import { Container, Typography } from "@material-ui/core";
import {
  Email,
  LinkedIn,
  LocalPhone,
  LocationOn,
  Twitter,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2D3047",
        color: "#fff",
        padding: "50px ",
        height: "100vh",
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          height: "100vh",
          display: "flex",
          gap: "50px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
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
              Loads across India. Enjoy instant credits upto ₹5,00,000 and book
              your first truck now.
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
          style={{ display: "flex", gap: "120px", justifyContent: "center" }}
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <LocationOn />
              <Typography style={{ width: "15vw" }}>
                5th Floor, Kuppu Arcade, Venkatanarayana Rd, T. Nagar, Chennai,
                Tamil Nadu
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Email />
              <Typography>hello@stockarea.io</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
      </Container>
    </footer>
  );
};

export default Footer;
