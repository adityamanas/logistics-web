"use client";
import Container from "../../Container/Container";
import "./ServiceSection.scss";
import Air from "../../../../public/images/services-air-freight-teaser.jpg";
import Digital from "../../../../public/images/services-digital-overview-teaser.jpg";
import Road from "../../../../public/images/services-road-transport-teaser.jpg";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

const ServiceSection: React.FC = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className="sea-container serviceSection">
        <div className="imageSection">
          <Image alt="sea" src={Road} />
        </div>
        <div className="sea-para serviceDesc">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Services</p>
          <h2>Sea freight logistics and container shipping solutions</h2>
          <p style={{ fontSize: "18px" }}>
            Build your most flexible supply chain. Join our worldwide ocean
            shipping network and fulfill your commitments to customers with
            ease.
          </p>
          <button className="serviceBtn">
            Read Full Story <ArrowForward />
          </button>
        </div>
      </div>
      <div className="air-container serviceSection">
        <div className="air-para serviceDesc">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Services</p>
          <h2>Air Logistics - air freight shipping services</h2>
          <p style={{ fontSize: "18px" }}>
            Your shipments will reach their destination quickly, safely, and in
            perfect condition.
          </p>
          <button className="serviceBtn">
            Read Full Story <ArrowForward />
          </button>
        </div>
        <div className="imageSection">
          <Image alt="air" src={Air} />
        </div>
      </div>
      <div className="road-container serviceSection">
        <div className="imageSection">
          <Image alt="sea" src={Road} />
        </div>
        <div className="road-para serviceDesc">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Services</p>
          <h2>Road transportation - LTL and FTL freight, Groupage</h2>
          <p style={{ fontSize: "18px" }}>
            Let our Overland service experts take care of your cargo (LTL
            freight, FTL freight, Groupage) from doorstep to destination.
          </p>
          <button className="serviceBtn">
            Read Full Story <ArrowForward />
          </button>
        </div>
      </div>
      <div className="digital-container serviceSection">
        <div className="digital-para serviceDesc">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Services</p>
          <h2>Our Digital Solutions for Logistics</h2>
          <p style={{ fontSize: "18px" }}>
            Digital logistics solutions allow businesses to be more productive,
            lower their costs and solve problems more efficiently. Enhance your
            digital strategy with Kuehne+Nagel.
          </p>
          <button className="serviceBtn">
            Read Full Story <ArrowForward />
          </button>
        </div>
        <div className="imageSection">
          <Image alt="digital" src={Digital} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
