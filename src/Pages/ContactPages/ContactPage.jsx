import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import TrackVisibility from "react-on-screen";
import "../ContactPages/ContactPage.css"

function ContactPage() {
  const formInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      let result = await response.json();
      setButtonText("Send");
      if (result.code === 200) {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again.",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong, please try again.",
      });
    }
  };

  return (
    <Container className="col-lg-8">
      <section className="contact-page">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <TrackVisibility once={true}>
                {({ isVisible }) =>
                  isVisible && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src="/path-to-your-image.jpg" // Replace with your image path
                        alt="Contact Us"
                        className="contact-image"
                      />
                    </motion.div>
                  )
                }
              </TrackVisibility>
            </Col>
            <Col md={6}>
              <h2>Get in touch</h2>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={formDetails.firstname}
                        onChange={(e) =>
                          onFormUpdate("firstname", e.target.value)
                        }
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={formDetails.lastname}
                        onChange={(e) =>
                          onFormUpdate("lastname", e.target.value)
                        }
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={formDetails.email}
                        onChange={(e) =>
                          onFormUpdate("email", e.target.value)
                        }
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        value={formDetails.phone}
                        onChange={(e) =>
                          onFormUpdate("phone", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Message"
                        value={formDetails.message}
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  {buttonText}
                </Button>
                {status.message && (
                  <Alert
                    variant={status.success ? "success" : "danger"}
                    className="mt-3"
                  >
                    {status.message}
                  </Alert>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default ContactPage;
