"use client";

import Container from "../../Container/Container";
import "./Storage.scss";

const Storage: React.FC = () => {
  return (
    <div
      style={{
        background: "lightgrey",
      }}
    >
      <Container>
        <div className="storageSection">
          <div className="storageSectionHeading">
            <h2 style={{ fontWeight: "600" }}>
              Simplifying storage & movement of goods for modern Indian
              Businesses
            </h2>
            <p style={{ fontSize: "18px" }}>
              Our solutions enables you to store your goods flexibly across
              India, transport them domestically on demand, import them from
              your international suppliers, and export them to your worldwide
              customers, all with a single partner & technology.
            </p>
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
