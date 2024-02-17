// "use client";
// import { ClassNames } from "@emotion/react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Button,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import logo from "../../../public/images/logo.png";

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
//     // background: "rgb(77, 70, 67)",
//     background: "white",
//     display: "flex",
//     justifyContent: "center",
//     height: "15vh",
//     alignItems: "center",
//     gap: "100px",
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
//   return (
//     <AppBar
//       position="static"
//       style={{
//         background: "#F5F5FA",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-end",
//           height: "8vh",
//         }}
//       >
//         <Typography variant="h6" className={classes.headercontact}>
//           Contact Us :
//         </Typography>
//         <Typography className={classes.number} style={{ color: "black" }}>
//           +91 12345678
//         </Typography>
//       </div>
//       <div className={classes.navbar}>
//         <div>
//           <img
//             src="https://stockarea.io/assets/user/images/header/logo.png"
//             alt="logo"
//             style={{ height: "5vh" }}
//           />
//         </div>
//         <div style={{ display: "flex", gap: "40px" }}>
//           <Typography
//             variant="h6"
//             style={{ color: "black", fontSize: "14px", letterSpacing: "0.2px" }}
//           >
//             Products
//           </Typography>
//           <Typography
//             variant="h6"
//             style={{
//               color: "black",
//               fontSize: "15px",
//               letterSpacing: "1px",
//             }}
//           >
//             Network
//           </Typography>
//           <Typography
//             variant="h6"
//             style={{ color: "black", fontSize: "15px", letterSpacing: "1px" }}
//           >
//             Services
//           </Typography>
//           <Typography
//             variant="h6"
//             style={{ color: "black", fontSize: "15px", letterSpacing: "1px" }}
//           >
//             Resources
//           </Typography>
//         </div>
//         <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//           <Typography
//             variant="h6"
//             style={{ color: "black", fontSize: "15px", letterSpacing: "1px" }}
//           >
//             Log In
//           </Typography>
//           <Button variant="outlined" className={classes.getStartedButton}>
//             Get Started
//           </Button>
//         </div>
//       </div>
//     </AppBar>
//   );
// };

// export default Header;
// "use client";
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { DragHandleRounded, LocalPhone } from "@mui/icons-material";

// interface HeaderProps {
//   title: string;
// }

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
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
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: theme.spacing(1),
//     [theme.breakpoints.down("sm")]: {
//       justifyContent: "flex-start",
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("md")]: {
//       display: "none",
//     },
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   logo: {
//     height: "5vh",
//   },
//   getStartedButton: {
//     color: "#ED3232",
//     padding: "13px 40px",
//     border: "1px solid #ED3232",
//     fontWeight: "bold",
//     fontSize: "19px",
//     textTransform: "capitalize",
//     letterSpacing: "1px",
//     [theme.breakpoints.down("sm")]: {
//       display: "none",
//     },
//     "&:hover": {
//       backgroundColor: "#ED3232",
//       color: "white",
//     },
//   },
// }));

// const Header: React.FC<HeaderProps> = ({ title }) => {
//   const classes = useStyles();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer =
//     (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === "keydown" &&
//         ((event as React.KeyboardEvent).key === "Tab" ||
//           (event as React.KeyboardEvent).key === "Shift")
//       ) {
//         return;
//       }
//       setDrawerOpen(open);
//     };

//   return (
//     <AppBar position="static" style={{ background: "#F5F5FA" }}>
//       <Toolbar className={classes.navbar}>
//         <IconButton
//           edge="start"
//           className={classes.menuButton}
//           color="inherit"
//           aria-label="menu"
//           onClick={toggleDrawer(true)}
//         >
//           <DragHandleRounded />
//         </IconButton>
//         <Typography variant="h6" className={classes.logo}>
//           <img
//             src="https://stockarea.io/assets/user/images/header/logo.png"
//             alt="logo"
//             style={{ height: "100%" }}
//           />
//         </Typography>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <LocalPhone />
//           <Typography
//             variant="h6"
//             className={classes.number}
//             style={{ color: "black", marginLeft: "5px" }}
//           >
//             +91 12345678
//           </Typography>
//           <Button variant="outlined" className={classes.getStartedButton}>
//             Log In
//           </Button>
//         </div>
//       </Toolbar>
//       <Drawer
//         className={classes.drawer}
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer(false)}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <List>
//           <ListItem button>
//             <ListItemText primary="Products" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Network" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Resources" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;
