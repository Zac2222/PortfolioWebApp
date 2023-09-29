import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import csharp from '../Icons/CSharp.png'
import javascript from '../Icons/JavaScript.png'
import html from '../Icons/HTML.png'
import css from '../Icons/CSS.png'
import react from '../Icons/React.png'
import typescript from '../Icons/TypeScript.png'
import unity from '../Icons/Unity.png'
import '../CSS/AboutMe.css'


const AboutMe = () => {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
      {/* i dont know how to write, need to add more onto this in the future */}
      <h2 className='boop'>I am a passionate software developer currently attending Code Stack Academy.</h2>
    </div>
    <div className='aboutIcons d-flex flex-column align-items-center'>
      <h2 className='boop mb-5'>Here are some languages and framworks I am proficient at</h2>
      <Row className='mt-5'>
        <Col className='col iconGlow'><Image src={csharp}/></Col>
        <Col className='col iconGlow'><Image src={javascript}/></Col>
        <Col className='col iconGlow'><Image src={html}/></Col>
        <Col className='col iconGlow'><Image src={css}/></Col>
        <Col className='col iconGlow'><Image src={react}/></Col>
        <Col className='col iconGlow'><Image src={typescript}/></Col>
        <Col className='col iconGlow'><Image src={unity}/></Col>
      </Row>
    </div>
    </>

  )
}

export default AboutMe
