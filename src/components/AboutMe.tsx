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
      <h2 className='boop'>I am a passionate software developer who recently graduated from Code Stack Academy, an intensive 18-month program where I improved my skills in both front-end and back-end development. I was also given the opportunity to attend an internship, providing me with hands-on experience in working on large-scale websites used by millions.</h2>
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