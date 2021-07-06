// Amazon clone
// Exercise Tracker
// Quiz
// Covid Notifier
// To do list
// Chat Application
// Drums
// Simon Game
// Rock paper scissor
// Multivideo
//Mental app

import React from "react";
import "./Project.css";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import { Card, Image } from "react-bootstrap";
export const Project = () => {
  return (
    <div id="projects">
      <h1 className="pt-1 pb-1 text-center font-details-b">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date="01/07/2021"
            className="text-center"
            text="Amazon Clone"
            src="https://www.versionmuseum.com/images/websites/amazon-website/amazon-website%5E2019%5Ehomepage.jpg"
            alt="Amazon clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>This is an Amazon clone
                      crreated with React and Stripe.
                      <hr />
                      <strong>Features</strong>
                      <ul className="list-styles pt-1">
                        <li>Allow you to select and add item to cart.</li>
                        <li>Show your previos orders.</li>
                        <li>Allow to make payment through card.</li>
                        <li>Payment system is dont with help of Stripe.</li>
                      </ul>
                      <hr />
                      <strong>Tech stack:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/html-5.676e8188.svg"
                              alt="HTML-5"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            HTML 5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/css3.3707da3c.svg"
                              alt="CSS-3"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            CSS 3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/react.4009eef3.svg"
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            React JS
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/express.c6bab64b.svg"
                              alt="Express"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Express JS
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/330px-Firebase_Logo.svg.png"
                              alt="Firebase"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Firebase Auth and firestore
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {" "}
                <UrlButton
                  href="https://github.com/akjha96/Amazon-Clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="14/06/2021"
            className="text-center"
            text="Exercise Tracker"
            src="https://raw.githubusercontent.com/Shivamishra21/Portfolio/main/assets/images/project-page/exercise.jpg"
            alt="Exercise Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>This is Exercise Tracker
                      created with React, Express and MongoDB.
                      <hr />
                      <strong>Features</strong>
                      <ul className="list-styles pt-1">
                        <li>Allow you to add you daily exercise details.</li>
                        <li>
                          Users can also edit exercise details and see their
                          exercise.
                        </li>
                      </ul>
                      <hr />
                      <strong>Tech stack:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/html-5.676e8188.svg"
                              alt="HTML-5"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            HTML 5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/css3.3707da3c.svg"
                              alt="CSS-3"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            CSS 3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/react.4009eef3.svg"
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            React JS
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/express.c6bab64b.svg"
                              alt="Express"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Express JS
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/mongodb.2985235d.svg"
                              alt="Mongodb"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            MongoDB
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {" "}
                <UrlButton
                  href="https://github.com/Shivamishra21/Exercise-Tracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://reverent-lalande-d3ef0a.netlify.app/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="04/03/2021"
            className="text-center"
            text="Covid Desktop Notifier"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNHbNgm1sn4Da_G47dqKuCtPbVDib061Ubg&usqp=CAU"
            alt="Covid Desktop Notifier"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>This is Covid Desktop
                      Notifier created in Python using Tkinter library.
                      <hr />
                      <strong>Features</strong>
                      <ul className="list-styles pt-1">
                        <li>
                          User just need to enter name of the country and can
                          get all details.
                        </li>
                        <li>
                          Details include{" "}
                          <ul>
                            <li>Total Cases</li>
                            <li>New Deaths</li>
                            <li>New Cases</li>
                            <li>Number of deaths</li>
                          </ul>
                          .
                        </li>
                      </ul>
                      <hr />
                      <strong>Tech stack:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/python.146716bd.svg"
                              alt="Tkinter"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Tkinter (Python library)
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {" "}
                <UrlButton
                  href="https://github.com/Shivamishra21/Covid-Desktop-Notifier"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="04/04/2021"
            className="text-center"
            text="Quiz Application"
            src="https://raw.githubusercontent.com/Shivamishra21/Portfolio/main/assets/images/project-page/quiz.jpg"
            alt="Quiz App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>This is a quiz app. It
                      comprises of 10 questions.
                      <hr />
                      <strong>Features</strong>
                      <ul className="list-styles pt-1">
                        <li>
                          Question pallete show different colors for different
                          states of questions:
                          <ul>
                            <li>Visited</li>
                            <li>Visited and not answered</li>
                            <li>Visited and answered</li>
                            <li>Not visited</li>
                          </ul>
                        </li>
                        <li>User can switch between questions.</li>
                        <li>After submission result will ne shown</li>
                      </ul>
                      <hr />
                      <strong>Tech stack:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/html-5.676e8188.svg"
                              alt="HTML-5"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            HTML 5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/css3.3707da3c.svg"
                              alt="CSS-3"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            CSS 3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/javascript.2d2e31cc.svg"
                              rounded
                              alt="JavaScript"
                              className="image-style1 m-1"
                            ></Image>{" "}
                            JavaScript
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/bootstrap-4.ffded238.svg"
                              alt="Bootstrap"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {" "}
                <UrlButton
                  href="https://github.com/Shivamishra21/quiz"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://shivamishra21.github.io/quiz/"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="30/05/2021"
            className="text-center"
            text="Aware | Personal Wellbeing App"
            src="https://raw.githubusercontent.com/Shivamishra21/Portfolio/main/assets/images/project-page/mental-health.jpg"
            alt="Aware | Personal Wellbeing App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>Aware is an app where user
                      can express their emotional states by writing diaries,
                      answering few questions and selecting their moods..
                      <hr />
                      <strong>Features</strong>
                      <ul className="list-styles pt-1">
                        <li>
                          User can select their mood:
                          <ul>
                            <li>Happy</li>
                            <li>Good</li>
                            <li>Normal</li>
                            <li>Sad</li>
                            <li>Awful</li>
                          </ul>
                        </li>

                        <li>User can write their current feeling in diary.</li>
                        <li>User can read all their previous diaries</li>
                        <li>
                          Some famous psycological questions user need to answer
                          in order to understand their mental state
                        </li>
                      </ul>
                      <hr />
                      <strong>Tech stack:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/html-5.676e8188.svg"
                              alt="HTML-5"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            HTML 5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/css3.3707da3c.svg"
                              alt="CSS-3"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            CSS 3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/react.4009eef3.svg"
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            React JS
                          </span>
                        </li>

                        <li>
                          <span className="p-2">
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/330px-Firebase_Logo.svg.png"
                              alt="Firebase"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Firebase
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {" "}
                <UrlButton
                  href="https://github.com/aditya-kd/Aware-1.0-"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://awareprj-a91f2.web.app"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/1N446TQgBZ4fsnE-jdkkhrbZvlFwKgWxa/view?usp=sharing"
                  target="_blank"
                >
                  VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="14/04/2021"
            className="text-center"
            text="Chat Application"
            src="https://raw.githubusercontent.com/Shivamishra21/Portfolio/main/assets/images/project-page/chat.png"
            alt="Chat App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>It a basic chat application
                      made with react-chat-engine and axios
                      <hr />
                      <strong>Features</strong>
                      <ul className="list-styles pt-1">
                        <li>It allow to send messages and images.</li>
                        <li>Its shows status of other users(online/offline)</li>
                        <li>Give notification when any new msg is there.</li>
                        <li>Shows how many grp member have seen the msg.</li>
                      </ul>
                      <hr />
                      <strong>Tech stack:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/css3.3707da3c.svg"
                              alt="CSS-3"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            CSS 3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/react.4009eef3.svg"
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            React JS (Chat Engine)
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src="https://axios-http.com/assets/logo.svg"
                              alt="Axios"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Axios
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {" "}
                <UrlButton
                  href="https://github.com/Shivamishra21/Chat-Application"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://clever-montalcini-49cd3a.netlify.app"
                  target="_blank"
                >
                  LIVE DEMO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};
