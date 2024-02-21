"use client";
import {
  Button,
  TextField,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import React, { useState } from "react";
import ContactImg from "../../../public/images/contact-us.png";
import Container from "../Container/Container";
import { makeStyles } from "@material-ui/core/styles";

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
  }
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
        [name]: "", // Clear the error message if no validation error
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
      <Container>
        <div className={classes.formMainDiv}
          style={{ height: "100%", padding: "0 80px" }}>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              color: "#cf5435",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Typography>
          <div className={classes.formContainer} style={{ display: "flex", justifyContent: "space-between" }}>
            <form className={classes.formSection}
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                width: "51%",
              }}
            >
              <TextField
                id="name"
                name="name"
                label="Name"
                required
                variant="standard"
                // style={{ width: "540px" }}
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  style: {
                    color: "#cf5435",
                    borderColor: "#cf5435",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#cf5435",
                  },
                }}
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                required
                variant="standard"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  style: {
                    color: "#cf5435",
                    borderColor: "#cf5435",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#cf5435",
                  },
                }}
              />
              <TextField
                id="subject"
                name="subject"
                label="Subject"
                variant="standard"
                required
                value={formData.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
                InputProps={{
                  style: {
                    color: "#cf5435",
                    borderColor: "#cf5435",
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#cf5435",
                  },
                }}
              />
              <TextareaAutosize
                className={classes.formTextField}
                minRows={5}
                id="message"
                name="message"
                required
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                style={{ border: "none" }}
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  background: "#cf5435",
                  color: "white",
                  padding: "13px 40px",
                  fontWeight: "bold",
                  fontSize: "19px",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                }}
              >
                Submit
              </Button>
            </form>
            <Image src={ContactImg} alt="contact" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactUsForm;
