// "use client";
// import { ClassNames } from "@emotion/react";
// import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import logo from "../../../public/images/logo.png";
// import Image from "next/image";
// import Container from "../Container/Container";

// interface HeaderProps {
//   // title: string;
//   onContactUsClick: () => void;
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
//     // background: "rgb(77, 70, 67)",
//     background: "#cf5435",
//     display: "flex",
//     justifyContent: "space-between",
//     height: "90px",
//     alignItems: "center",
//     // gap: "166px",
//     position: "sticky",
//     // top: "0",
//   },
//   getStartedButton: {
//     color: "white",
//     padding: "13px 40px",
//     border: "1px solid white",
//     fontWeight: "bold",
//     fontSize: "19px",
//     textTransform: "capitalize",
//     letterSpacing: "1px",
//     "&:hover": {
//       backgroundColor: "white",
//       color: "#ED3232",
//     },
//   },
// });

// const Header: React.FC<HeaderProps> = ({ onContactUsClick }) => {
//   const classes = useStyles();

//   return (
//     <AppBar
//       position="static"
//       style={{
//         background: "#F5F5FA",
//       }}
//     >
//       <Container>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             // marginLeft: "76%",

//             height: "50px",
//           }}
//         >
//           <Typography variant="h6" className={classes.headercontact}>
//             tel :
//           </Typography>
//           <Typography className={classes.number} style={{ color: "black" }}>
//             +91 12345678
//           </Typography>
//         </div>
//       </Container>
//       <div
//         style={{
//           background: "#cf5435",
//         }}
//       >
//         <Container>
//           <div className={classes.navbar}>
//             <div>
//               <Image
//                 alt="logo"
//                 src={logo}
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                 }}
//               />
//             </div>
//             <div style={{ display: "flex", gap: "51px" }}>
//               <Typography
//                 variant="h6"
//                 style={{
//                   color: "white",
//                   fontSize: "14px",
//                   letterSpacing: "0.2px",
//                 }}
//               >
//                 Products
//               </Typography>
//               <Typography
//                 variant="h6"
//                 style={{
//                   color: "white",
//                   fontSize: "15px",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 Network
//               </Typography>
//               <Typography
//                 variant="h6"
//                 style={{
//                   color: "white",
//                   fontSize: "14px",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 Services
//               </Typography>
//               <Typography
//                 variant="h6"
//                 style={{
//                   color: "white",
//                   fontSize: "14px",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 Resources
//               </Typography>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//               {/* <Typography
//                 variant="h6"
//                 style={{
//                   color: "white",
//                   fontSize: "14px",
//                   letterSpacing: "1px",
//                 }}
//               >
//                 Log In
//               </Typography> */}
//               <Button
//                 variant="outlined"
//                 className={classes.getStartedButton}
//                 onClick={onContactUsClick}
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </AppBar>
//   );
// };

// export default Header;
"use client";
import React, { useState } from "react";
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
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Container from "../Container/Container";

interface HeaderProps {
  onContactUsClick: () => void;
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
    background: "#cf5435",
    display: "none",
    justifyContent: "space-around",
    gap: "40px",
    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  desktopNavbar: {
    background: "#cf5435",
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

const Header: React.FC<HeaderProps> = ({ onContactUsClick }) => {
  const classes = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AppBar position="static" style={{ background: "#F5F5FA" }}>
      //{" "}
      <Container>
        //{" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            // marginLeft: "76%",

            height: "50px",
          }}
        >
          <Typography variant="h6" className={classes.headercontact}>
            tel :
          </Typography>
          <Typography className={classes.number} style={{ color: "black" }}>
            +91 12345678
          </Typography>
        </div>
      </Container>
      {/* Desktop Header */}
      <Toolbar className={classes.desktopNavbar}>
        <Image alt="logo" src={logo} className={classes.logo} />
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
        <Button
          variant="outlined"
          className={classes.getStartedButton}
          onClick={onContactUsClick}
        >
          Contact Us
        </Button>
      </Toolbar>
      {/* Mobile Header */}
      <Toolbar className={classes.navbar}>
        <IconButton color="inherit" onClick={toggleMobileMenu}>
          <DragHandleRounded />
        </IconButton>
        <Image alt="logo" src={logo} className={classes.logo} />
        <LocalPhone />
        {/* <Typography variant="h6" className={classes.headercontact}>
          tel :
        </Typography>
        <Typography className={classes.number} style={{ color: "black" }}>
          +91 12345678
        </Typography> */}
      </Toolbar>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`${classes.navbar} ${classes.menuListItem}`}>
          <Typography variant="h6">Products</Typography>
          <Typography variant="h6">Network</Typography>
          <Typography variant="h6">Services</Typography>
          <Typography variant="h6">Resources</Typography>
          {/* Add other menu items as needed */}
          <Button variant="outlined" className={classes.getStartedButton}>
            Get Started
          </Button>
        </div>
      )}
    </AppBar>
  );
};

export default Header;
