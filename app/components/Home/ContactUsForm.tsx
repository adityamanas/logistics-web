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

const ContactUsForm: React.FC = () => {
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
        <div style={{ height: "100%", padding: "0 80px" }}>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="standard"
                style={{ width: "540px" }}
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
                minRows={5}
                id="message"
                name="message"
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
