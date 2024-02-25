"use client";

import { Typography } from "@material-ui/core";
import Storage from "./Storage";
import { makeStyles } from "@material-ui/core/styles";
import Benefits from "./Benefits";

const useStyles = makeStyles({
  learnMoreButton: {
    fontSize: "19px",
    cursor: "pointer",
    "&:hover": {
      color: "#ED3232",
    },
  },
  BannerSection: {
    "@media (max-width: 768px)": {
      width: "100%!important",
    },
    padding: "23px 0px",
  },
  solutionItem: {
    flexWrap: "wrap",
  },
});

const Solution: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          height: "100%",
          padding: "5%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            style={{ fontWeight: "600", letterSpacing: "1px" }}
          >
            Tailor-Made Solutions to stay ahead of the competiton
          </Typography>
          <Typography style={{ fontSize: "18px" }}>
            We cater to business from SME to Enterprise
          </Typography>
        </div>
        <div
          className={classes.solutionItem}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "70px",
          }}
        >
          <div>
            <img
              src="https://stockarea.io/assets/user/images/home/manufacturers.svg"
              alt=""
            />
            <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
              Manufacturers
            </Typography>
          </div>
          <div>
            <img
              src="https://stockarea.io/assets/user/images/home/distributors.svg"
              alt=""
            />
            <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
              Distributors
            </Typography>
          </div>
          <div>
            <img
              src="https://stockarea.io/assets/user/images/home/traders.svg"
              alt=""
            />
            <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
              Traders
            </Typography>
          </div>
          <div>
            <img
              src="https://stockarea.io/assets/user/images/home/importers.svg"
              alt=""
            />
            <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
              Importers
            </Typography>
          </div>
          <div>
            <img
              src="https://stockarea.io/assets/user/images/home/exporters.svg"
              alt=""
            />
            <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
              Exporters
            </Typography>
          </div>
        </div>
      </div>
      <Benefits />
      <Storage />
    </>
  );
};

export default Solution;
