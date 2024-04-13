import React from "react";
import { Container, Row } from "react-bootstrap";
import "../ServicesPages/ServicePage.css"

function ServicePage() {
  const services = [
    {
      image: "/path/to/image1.jpg",
      title: "Service 1",
      text: "Service 1 description goes here. Brief information about the service and its benefits.",
    },
    {
      image: "/path/to/image2.jpg",
      title: "Service 2",
      text: "Service 2 description goes here. Key features and advantages of the service.",
    },
    {
      image: "/path/to/image3.jpg",
      title: "Service 3",
      text: "Service 3 description goes here. How this service can benefit the customer.",
    },
    // Add more services as needed (you can add up to 9 services)
  ];
  return (
    <Container>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className={`service-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="service-image">
              <img src={service.image} alt={`Service ${index + 1}`} />
            </div>
            <div className="service-text">
              <h3 className="service-title">{service.title}</h3>
              <p>{service.text}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
        {/* Display "and many more" button at the end */}
        <div className="many-more">
          <button className="many-more-btn">And many more...</button>
        </div>
      </div>
    </Container>
  );
}

export default ServicePage;
