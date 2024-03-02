"use client";
import Storage from "../Solution/Solution";
import Benefits from "../Benefit/Benefits";
import Image from "next/image";
import "./Solution.scss";

const Solution: React.FC = () => {
  return (
    <>
      <div
      id="about"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          height: "100%",
          padding: "5%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1 style={{ fontWeight: "600" }}>
            Tailor-Made Solutions to stay ahead of the competiton
          </h1>
          <p style={{ fontSize: "18px" }}>
            We cater to business from SME to Enterprise
          </p>
        </div>
        <div className="solutionItems">
          <div>
            <Image
              src="https://stockarea.io/assets/user/images/home/manufacturers.svg"
              alt="manufacturers"
              height={70}
              width={70}
            />
            <p style={{ fontSize: "18px", fontWeight: "600" }}>Manufacturers</p>
          </div>
          <div>
            <Image
              src="https://stockarea.io/assets/user/images/home/distributors.svg"
              alt="distributors"
              height={70}
              width={70}
            />
            <p style={{ fontSize: "18px", fontWeight: "600" }}>Distributors</p>
          </div>
          <div>
            <Image
              src="https://stockarea.io/assets/user/images/home/traders.svg"
              alt="traders"
              height={70}
              width={70}
            />
            <p style={{ fontSize: "18px", fontWeight: "600" }}>Traders</p>
          </div>
          <div>
            <Image
              src="https://stockarea.io/assets/user/images/home/importers.svg"
              alt="importers"
              height={70}
              width={70}
            />
            <p style={{ fontSize: "18px", fontWeight: "600" }}>Importers</p>
          </div>
          <div>
            <Image
              src="https://stockarea.io/assets/user/images/home/exporters.svg"
              alt="exporters"
              height={70}
              width={70}
            />
            <p style={{ fontSize: "18px", fontWeight: "600" }}>Exporters</p>
          </div>
        </div>
      </div>
      <Benefits />
      <Storage />
    </>
  );
};

export default Solution;
