"use client";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  storageSection: {
    "@media (max-width:768px)": {
      flexDirection: "column!important",
      padding: "21px 12px!important",
    },
  }
})
const Storage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.storageSection}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px",
          gap: "50px",
          background: "lightgrey",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            Simplifying storage & movement of goods for modern Indian Businesses
          </Typography>
          <Typography style={{ fontSize: "18px" }}>
            Our solutions enables you to store your goods flexibly across India,
            transport them domestically on demand, import them from your
            international suppliers, and export them to your worldwide
            customers, all with a single partner & technology.
          </Typography>
        </div>
        <div>
          <img
            src="https://stockarea.io/assets/user/images/home/business.svg"
            alt="" width={"100%"}
          />
        </div>
      </div>
    </>
  );
};

export default Storage;
