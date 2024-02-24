"use client";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../Container/Container";

const useStyles = makeStyles({
  storageSection: {
    "@media (max-width:768px)": {
      flexDirection: "column!important",
      padding: "21px 12px!important",
    },
    "@media (min-width:769px) and (max-width:1024px)": {
      flexDirection: "column",
    },
  },
  storageSectionHeading: {
    "@media (max-width:768px)": {
      width: "100%!important",
    },
    "@media (min-width:769px) and (max-width:1024px)": {
      width: "100%!important",
    },
  },
});
const Storage: React.FC = () => {
  const classes = useStyles();
  return (
    <div style={{
      background: "lightgrey",
    }} >
      <Container>
        <div
          className={classes.storageSection}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "33px 0px",
            gap: "50px",
            // background: "lightgrey",
          }}
        >
          <div
            className={classes.storageSectionHeading}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "50%",
            }}
          >
            <Typography variant="h4" style={{ fontWeight: "600" }}>
              Simplifying storage & movement of goods for modern Indian
              Businesses
            </Typography>
            <Typography style={{ fontSize: "18px" }}>
              Our solutions enables you to store your goods flexibly across
              India, transport them domestically on demand, import them from
              your international suppliers, and export them to your worldwide
              customers, all with a single partner & technology.
            </Typography>
          </div>
          <div>
            <img
              src="https://stockarea.io/assets/user/images/home/business.svg"
              alt=""
              width={"100%"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Storage;
