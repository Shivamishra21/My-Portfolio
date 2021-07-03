import React from "react";
import { Button,Row,Col,Jumbotron } from "react-bootstrap";


const Contact = () => {
  return (
    <div id="contact">
    <he className="text-center pt-3 pb-3 font-details-b pb-3">CONTACT ME</he>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content flex-wrap">
            <div className="m-2">
              <a
                href="mailto:shivamishra2102@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="shivamishra2102@gmail.com"
                >
                  <i className="fas fa-envelope-square" />
                  Email
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/shiva-mishra-a802881a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="My LinkedIn account">
                  <i className="fas fa-linkedin" />
                  LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/Shivamishra21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My Github account">
                  <i className="fas fa-github-square" />
                  Github
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.facebook.com/profile.php?id=100043265192641"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info" title="My Facebook account">
                  <i className="fas fa-facebook-square" />
                  Facebook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://instagram.com/shivii340"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My Instagram account">
                  <i className="fas fa-instagram" />
                  Instagram
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://twitter.com/ShivaMi15937746"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My Twitter account">
                  <i className="fas fa-twitter" />
                  Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
