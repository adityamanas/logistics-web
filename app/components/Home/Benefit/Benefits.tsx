"use client";
import Container from "../../Container/Container";
import BenefitImg from "../../../../public/images/benefit.svg";
import Icon1 from "../../../../public/images/icon1.svg";
import Icon2 from "../../../../public/images/icon2.svg";
import Icon3 from "../../../../public/images/icon3.svg";
import Icon4 from "../../../../public/images/icon4.svg";
import Image from "next/image";
import "./Benefits.scss";

const Benefits: React.FC = () => {
  return (
    <Container>
      <div style={{ height: "100%", width: "100%", marginTop: "34px" }}>
        <p style={{ fontWeight: "600", textAlign: "center", fontSize: "25px" }}>
          Benefits 369 offers as your Logistics Partner
        </p>
        <div className="benefitContainer">
          <div>
            <Image className="benefitImage" alt="benefit" src={BenefitImg} />
          </div>
          <div className="benefit_icon_main">
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
                <p style={{ letterSpacing: "1px" }}>
                  Delivering unparalleled quality and specialized air freight
                  services worldwide, we ensure the utmost excellence at highly
                  competitive rates.
                </p>
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
                  Benefit from our extensive global network, linking vast
                  endpoints across the world. Ship conveniently to any
                  destination with ease.
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
                  Experience seamless, stress-free, and rapid air shipping with
                  our commitment to streamlined processes. Enjoy swift delivery,
                  even across extended distances.
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
