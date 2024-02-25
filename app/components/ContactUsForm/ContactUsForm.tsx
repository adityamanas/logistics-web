"use client";
import {
  Button,
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import React, { useState } from "react";
import ContactImg from "../../../public/images/contact-us.png";
import Container from "../Container/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Email, LocalPhone, Place } from "@mui/icons-material";
import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles({
  formContainer: {
    "@media (max-width:768px)": {
      flexDirection: "column-reverse!important",
      "& img": {
        width: "100%",
      },
    },
  },
  formSection: {
    "@media (max-width:768px)": {
      marginTop: "24px",
      width: "100%!important",
    },
  },
  formMainDiv: {
    "@media (max-width:768px)": {
      padding: "21px 12px!important",
    },
  },
  formTextField: {
    border: "1px solid gray!important",
    padding: "12px",

    "@media (max-width:768px)": {
      border: "1px solid gray!important",
      margin: "12px 0px",
      padding: "12px",
    },
  },
  TextField: {
    paddingTop: "12px",
  },
  cardContentContainer: {
    "@media (max-width:768px)": {
      flexDirection: "column",
      rowGap: "12px",
    },
  },
  cardContentSection: {
    "@media (max-width:768px)": {
      padding: "23px 0!important",
      height: "100%!important",
    },
    "@media (min-width:769px) and (max-width:1024px)": {
      height: "unset!important",
    },
  },
  addPara: {
    "@media (max-width:768px)": {
      width: "100%!important",
    },
  },
  formInput: {
    "@media (max-width:768px)": {
      flexDirection: "column",
    },
    "& input": {
      "@media (max-width:768px)": {
        width: "100%!important",
      },
    },
  },
});

const ContactUsForm: React.FC = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validation logic
    if (name === "name" && value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
    } else if (name === "email" && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // Function to validate email format
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <Header />
      <Container>
        <div
          className={classes.cardContentSection}
          style={{ width: "100%", padding: "20px" }}
        >
          <Card>
            <CardContent
              className={classes.cardContentContainer}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Place style={{ color: "#cf5435" }} />
                <div>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Location:
                  </Typography>
                  <Typography
                    className={classes.addPara}
                    style={{
                      width: "280px",
                      fontSize: "small",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    {" "}
                    Plot No. 28, Ground Floor, Blok B, Road No. 2, Pochanpur
                    Extension, New Delhi, 110077
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Email style={{ color: "#cf5435" }} />
                <div>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Email:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "small",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    abcd@gmail.com
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <LocalPhone style={{ color: "#cf5435" }} />
                <div>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Call:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "small",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    +91-1234 5678
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <form
              className={classes.formInput}
              onSubmit={handleSubmit}
              style={{ display: "flex", gap: "20px" }}
            >
              <input
                type="name"
                placeholder="Your Name"
                style={{
                  height: "30px",
                  width: "600px",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  paddingLeft: "14px",
                }}
                // value={formData.name}
                // onChange={handleChange}
                // error={!!errors.name}
                // helperText={errors.name}
              />
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  height: "30px",
                  width: "600px",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  paddingLeft: "14px",
                }}
                // value={formData.email}
                // onChange={handleChange}
                // error={!!errors.email}
                // helperText={errors.email}
              />
            </form>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <input
                type="text"
                placeholder="Subject"
                style={{
                  height: "30px",
                  borderRadius: "5px",
                  border: "1px solid grey",
                  paddingLeft: "14px",
                }}
                // value={formData.subject}
                // onChange={handleChange}
                // error={!!errors.subject}
                // helperText={errors.subject}
              />
              <textarea
                name="Message"
                cols={50}
                rows={10}
                // fullwidth
                placeholder="Message"
                style={{
                  borderRadius: "5px",
                  border: "1px solid grey",
                  padding: "14px",
                }}
                // value={formData.message}
                // onChange={handleChange}
                //  error={!!errors.subject}
                //  helperText={errors.subject}
              />
            </div>
            <Button
              variant="contained"
              style={{
                background: "#cf5435",
                color: "white",
                width: "140px",
                fontWeight: "bold",
                fontSize: "19px",
                textTransform: "capitalize",
                letterSpacing: "1px",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsForm;
