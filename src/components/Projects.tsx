import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "../CSS/Projects.css";
import dealOrNoDeal from "../Images/dealOrNoDeal.png";
import trivia from "../Images/trivia.png";
import calculator from "../Images/calculator.png";
import toDoList from "../Images/toDoList.png";
import ticTacToe from "../Images/ticTacToe.png";
import weatherApp from "../Images/weatherApp.png";

const Projects = () => {
  //not sure yet how we are integrating our projects, so they are just text for the time being
  return (
    <Container fluid>
      <Row>
        <Col className="col-6 my-5">
          <Image className="imageCrop" src={dealOrNoDeal} fluid />
          <h2 className="projectTextReverse">Deal or no deal</h2>
          <h3 className="projectTextReverse">Unity, C#/2022</h3>
        </Col>
        <Col className="col-6 my-5">
        <a href="https://white-wave-03cb46f1e.4.azurestaticapps.net" target="_blank" rel="noopener noreferrer">
          <Image className="imageCrop" src={trivia} fluid />
          </a>
          <h2 className="projectText">Guilty Gear Trivia</h2>
          <h3 className="projectText">JS, HTML, CSS/2023</h3>
        </Col>
      </Row>
      <Row>
        <Col className="col-6 my-5">
        <a href="https://victorious-mushroom-0ecae891e.4.azurestaticapps.net" target="_blank" rel="noopener noreferrer">
          <Image className="imageCrop" src={calculator} fluid />
          </a>
          <h2 className="projectTextReverse">Simple Calculator</h2>
          <h3 className="projectTextReverse">JS, HTML, CSS/2023</h3>
        </Col>
        <Col className="col-6 my-5">
        <a href="https://wonderful-water-02eadea1e.4.azurestaticapps.net" target="_blank" rel="noopener noreferrer">
          <Image className="imageCrop" src={toDoList} fluid />
          </a>
          <h2 className="projectText">To Do List</h2>
          <h3 className="projectText">JS, HTML, CSS/2023</h3>
        </Col>
      </Row>
      <Row>
        <Col className="col-6 my-5">
          <a href="https://green-water-0b53cb51e.4.azurestaticapps.net" target="_blank" rel="noopener noreferrer">
            <Image className="imageCrop" src={ticTacToe} fluid />
          </a>
          <h2 className="projectTextReverse">Tic Tac Toe</h2>
          <h3 className="projectTextReverse">React, TypeScript/2023</h3>
        </Col>
        <Col className="col-6 my-5">
        <a href="https://black-mushroom-09f9d3d1e.4.azurestaticapps.net" target="_blank" rel="noopener noreferrer">
          <Image className="imageCrop" src={weatherApp} fluid />
          </a>
          <h2 className="projectText">Weather App</h2>
          <h3 className="projectText">JS, HTML, CSS/2023</h3>
        </Col>
      </Row>
    </Container>

    // <h2 className='boop d-flex justify-content-center mt-5'>Tic Tac Toe</h2>
    // <h3 className='boop noteText d-flex justify-content-center mb-5'>React, TypeScript/2023</h3>

    // <h2 className='boop d-flex justify-content-center mt-5'>Weather App</h2>
    // <h3 className='boop noteText d-flex justify-content-center mb-5'>JS, HTML, CSS/2023</h3>
  );
};

export default Projects;
