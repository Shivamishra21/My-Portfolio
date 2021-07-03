import React from "react";
import { Container, Row, Col, Image,Button } from "react-bootstrap";
import "./About.css";
import profile from "../assets/profile.jpg";


const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  alt="Profile photo"
                  src={profile}
                  thumbnail
                  fluid
                  className="profile justify-content-end"
                />
              </Row>
            </Col>{" "}
            <Col xs={12} md={6}>
              <Row className="align-items-start p-2 my-details rounded">
                Greetings! My name is <strong>&nbsp;Shiva Mishra. </strong><br/>I am a
                passionate programmer and learner, born and brought up in
                <strong>Uttar pradesh, India.</strong>I am a Full Stack Web
                Developer with React.js, Experss.js, Node.js and Mongodb as my
                tech stack. Currently, am pursuing my Computer Science
                Engineering. I always try my best to make amazing and innovative
                projects. Learning about new technologies is always exciting for
                me and my crave for gaining knowledge pushes me to learn about
                it. I really enjoy problem solving and using it in real life. My
                goal is to always serve humanity by implementing what I know and
                learning what I don't.
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/shiva-mishra-a802881a2/" target="_blank" rel="noopener noreferrer">
                      <Button
                        className="m-2"
                        variant="outline-success"
                      >Linked-In</Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Shivamishra21" target="_blank" rel="noopener noreferrer">
                      <Button
                        className="m-2"
                        variant="outline-info"
                      >Github</Button>
                    </a>
                  </div>

                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
