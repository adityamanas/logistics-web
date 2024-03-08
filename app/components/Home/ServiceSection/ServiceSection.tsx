"use client";
import Container from "../../Container/Container";
import "./ServiceSection.scss";
import Air from "../../../../public/images/istockphoto-1027833750-612x612.jpg";
import Digital from "../../../../public/images/csm_Kuehne_Nagel_05_c0d1000ff7.png";
// import Road from "../../../../public/images/services-road-transport-teaser.jpg";
import Road from "../../../../public/images/Road-Freight-UK.jpg";
import Sea from "../../../../public/images/services-sea-freight-teaser.jpg";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

const ServiceSection: React.FC = () => {
  return (
    <div id="services" style={{ height: "100%" }}>
      <div className="sea-container serviceSection">
        <div className="imageSection">
          <Image alt="sea" src={Sea} />
        </div>
        <div className="sea-para serviceDesc">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Services</p>
          <h2>Sea freight logistics and container shipping solutions</h2>
          <p style={{ fontSize: "18px", marginTop: "20px" }}>
            Forge a resilient supply chain that seamlessly adapts to change.
            Become a part of our expansive worldwide ocean shipping network,
            ensuring smooth operations and fulfillment of customer commitments
            with unparalleled ease.
          </p>
          {/* <button className="serviceBtn">
            Read Full Story <ArrowForward />
          </button> */}
        </div>
      </div>
      <div className="air-container serviceSection">
        <div className="air-para serviceDesc">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Services</p>
          <h2>Air Logistics - air freight shipping services</h2>
          <p style={{ fontSize: "18px", marginTop: "20px" }}>
            With our commitment to excellence, your shipments are guaranteed to
            reach their destination swiftly, securely, and in impeccable
            condition. Trust us to prioritize the safety and timely delivery of
            your goods, ensuring a seamless experience for you and your
            customers.
          </p>
          {/* <button className="serviceBtn">
            Read Full Story <ArrowForward />
          </button> */}
        </div>
        <div className="imageSection">
          <Image alt="air" src={Air} />
        </div>
      </div>
      <div className="road-container serviceSection">
        <div className="imageSection">
          <Image alt="road" src={Road} />
        </div>
        <div className="road-para serviceDesc">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Services</p>
          <h2>Road transportation - LTL and FTL freight, Groupage</h2>
          <p style={{ fontSize: "18px", marginTop: "20px" }}>
            Rely on the expertise of our dedicated Overland service
            professionals to meticulously manage every aspect of your cargo,
            including Less-Than-Truckload (LTL) freight, Full Truckload (FTL)
            freight, and Groupage. Our commitment extends from the initial
            doorstep pickup to the final destination delivery, ensuring a
            comprehensive and seamless transportation experience.
          </p>
          {/* <button className="serviceBtn">
            Read Full Story <ArrowForward />
          </button> */}
        </div>
      </div>
      <div className="digital-container serviceSection">
        <div className="digital-para serviceDesc">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Services</p>
          <h2>Our Digital Solutions for Logistics</h2>
          <p style={{ fontSize: "18px", marginTop: "20px" }}>
            Allow our team of dedicated Overland service experts to meticulously
            handle every aspect of your cargo, be it Less-Than-Truckload (LTL)
            freight, Full Truckload (FTL) freight, or Groupage. From the initial
            pickup at your doorstep to the final delivery at the destination,
            entrust us with the comprehensive management of your shipments,
            ensuring a seamless and efficient journey throughout the entire
            transportation process.
          </p>
          {/* <button className="serviceBtn">
            Read Full Story <ArrowForward />
          </button> */}
        </div>
        <div className="imageSection">
          <Image alt="digital" src={Digital} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
