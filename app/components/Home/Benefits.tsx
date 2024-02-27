"use client";
import { Typography } from "@material-ui/core";
import Container from "../Container/Container";
import { makeStyles } from "@material-ui/core/styles";
import BenefitImg from "../../../public/images/benefit.svg";
import Icon1 from "../../../public/images/icon1.svg";
import Icon2 from "../../../public/images/icon2.svg";
import Icon3 from "../../../public/images/icon3.svg";
import Icon4 from "../../../public/images/icon4.svg";
import Image from "next/image";

const styles = {
  benefit_icon_main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: "23px",
  },
  benefitContainer: {
    "@media (min-width:340px) and (max-width:1024px)": {
      flexDirection: "column",
    },
  },
  benefitImage: {
    "@media (min-width:340px) and (max-width:1024px)": {
      width: "100%",
    },
  },
};

const Benefits: React.FC = () => {
  return (
    <Container>
      <div style={{ height: "100%", width: "100%", marginTop: "34px" }}>
        <p style={{ fontWeight: "600", textAlign: "center", fontSize: "25px" }}>
          Benefits 369 offers as your Logistics Partner
        </p>
        <div
          style={{
            ...styles.benefitContainer,
            display: "flex",
            gap: "30px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <div>
            <Image
              className={styles.benefitImage}
              alt="benefit"
              src={BenefitImg}
            />
          </div>
          <div style={{ ...styles.benefit_icon_main }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image alt="icon1" src={Icon1} />
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  Competitive Prices
                </p>
                <Typography style={{ letterSpacing: "1px" }}>
                  At the most competitive pricing, we provide you with the
                  finest quality and specialised air freight services globally
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image alt="icon2" src={Icon2} />
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  Wide Geographical Coverage
                </p>
                <p style={{ letterSpacing: "1px" }}>
                  We have a massive network of endpoints that spans the globe,
                  enabling you to conveniently ship to any location in the world
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image alt="icon3" src={Icon3} />
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  Speedy Service
                </p>
                <p style={{ letterSpacing: "1px" }}>
                  We ensure streamlined, hassle-free and fast air shipping,
                  offering you a speedy delivery experience even over long
                  distances
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image alt="icon4" src={Icon4} />
              <div
                style={{
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  Security
                </p>
                <p style={{ letterSpacing: "1px" }}>
                  We ensure the security of your cargo through periodic
                  inspections and strict supervision, eliminating any
                  possibility of theft or damage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Benefits;
