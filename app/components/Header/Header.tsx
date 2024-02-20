"use client";
import { ClassNames } from "@emotion/react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Container from "../Container/Container";

interface HeaderProps {
  title: string;
}

const useStyles = makeStyles({
  headercontact: {
    color: "black",
    fontSize: "14px",
    fontWeight: 600,
  },
  number: {
    color: "black",
    fontSize: "14px",
  },
  navbar: {
    // background: "rgb(77, 70, 67)",
    background: "#cf5435",
    display: "flex",
    justifyContent: "space-between",
    height: "90px",
    alignItems: "center",
    // gap: "166px",
    position: "sticky",
    // top: "0",
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
  },
});

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      style={{
        background: "#F5F5FA",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:"flex-end",
            // marginLeft: "76%",
            
            height: "50px",
          }}
        >
          <Typography variant="h6" className={classes.headercontact}>
            Contact Us :
          </Typography>
          <Typography className={classes.number} style={{ color: "black" }}>
            +91 12345678
          </Typography>
        </div>
      </Container>
      <div
        style={{
          background: "#cf5435",
        }}
      >
        <Container>
          <div className={classes.navbar}>
            <div>
              <Image
                alt="logo"
                src={logo}
                style={{
                  width: "50px",
                  height: "50px",
                }}
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
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                Log In
              </Typography>
              <Button variant="outlined" className={classes.getStartedButton}>
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </AppBar>
  );
};

export default Header;

// "use client";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Container,
//   Grid,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { DragHandleRounded } from "@mui/icons-material";

// interface HeaderProps {
//   title: string;
// }

// const useStyles = makeStyles({
//   headercontact: {
//     color: "black",
//     fontSize: "14px",
//     fontWeight: 600,
//   },
//   number: {
//     color: "black",
//     fontSize: "14px",
//   },
//   navbar: {
//     background: "white",
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//   },
//   getStartedButton: {
//     color: "#ED3232",
//     padding: "13px 40px",
//     border: "1px solid #ED3232",
//     fontWeight: "bold",
//     fontSize: "19px",
//     textTransform: "capitalize",
//     letterSpacing: "1px",
//     "&:hover": {
//       backgroundColor: "#ED3232",
//       color: "white",
//     },
//   },
// });

// const Header: React.FC<HeaderProps> = ({ title }) => {
//   const classes = useStyles();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <AppBar position="static" style={{ background: "#F5F5FA" }}>
//       <Container>
//         <Toolbar>
//           <Grid container alignItems="center">
//             <Grid item xs={2}>
//               <Typography variant="h6" className={classes.headercontact}>
//                 Contact Us :
//               </Typography>
//             </Grid>
//             <Grid item xs={8} sm={6} md={2}>
//               <Typography className={classes.number}>+91 12345678</Typography>
//             </Grid>
//             <Grid item xs={2} sm={6} md={8} container justifyContent="center">
//               <img
//                 src="https://stockarea.io/assets/user/images/header/logo.png"
//                 alt="logo"
//                 style={{ height: "5vh" }}
//               />
//             </Grid>
//             <Grid
//               item
//               xs={2}
//               container
//               justifyContent="flex-end"
//               alignItems="center"
//             >
//               <IconButton color="inherit" onClick={toggleMobileMenu}>
//                 <DragHandleRounded />
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </Container>
//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className={classes.navbar}>
//           <Typography variant="h6">Products</Typography>
//           <Typography variant="h6">Network</Typography>
//           <Typography variant="h6">Services</Typography>
//           <Typography variant="h6">Resources</Typography>
//           <Typography variant="h6">Log In</Typography>
//           <Button variant="outlined" className={classes.getStartedButton}>
//             Get Started
//           </Button>
//         </div>
//       )}
//     </AppBar>
//   );
// };

// export default Header;
