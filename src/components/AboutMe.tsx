import React, { useState } from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import csharp from '../Icons/CSharp.png'
import javascript from '../Icons/JavaScript.png'
import html from '../Icons/HTML.png'
import css from '../Icons/CSS.png'
import react from '../Icons/React.png'
import typescript from '../Icons/TypeScript.png'
import unity from '../Icons/Unity.png'
import '../CSS/AboutMe.css'

const AboutMe = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const handleButtonClick = () => {
    setShowLanguages(!showLanguages);
  }

  return (
    <div className='d-flex justify-content-center align-items-center textContainer'>
      <h2 className='boop'>I am a passionate software developer currently attending Code Stack Academy. I have been passionate about coding since middle school and hope to one day be apart of a team that makes something really special!</h2>
      <div className='aboutIcons d-flex flex-column align-items-center'>
        <Button className='buttonTheme mt-5'  onClick={handleButtonClick}>Click here to see what I can do!</Button>
        {showLanguages && (
          <Row className='mt-5'>
            <Col className='col iconGlow'><Image src={csharp}/></Col>
            <Col className='col iconGlow'><Image src={javascript}/></Col>
            <Col className='col iconGlow'><Image src={html}/></Col>
            <Col className='col iconGlow'><Image src={css}/></Col>
            <Col className='col iconGlow'><Image src={react}/></Col>
            <Col className='col iconGlow'><Image src={typescript}/></Col>
            <Col className='col iconGlow'><Image src={unity}/></Col>
          </Row>
        )}
      </div>
    </div>
  )
}

export default AboutMe