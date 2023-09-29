
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../CSS/Contact.css'

const Contact = () => {
  return (
    <div>
      {/* currently unsure if i want to have the google form or not, i think i like it better without */}
      {/* <iframe
      title="contact-form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScZJ66E3AgGnMH977uRqNyIVHn2FwTqY7aAdYEN0CqKbCnspA/viewform?embedded=true"
        style={{ width: "100%", height: "100vh", marginBottom: '-60px',}}
      >
        Loading…
      </iframe> */}

      <Form className='d-flex  flex-column align-items-center mb-5'>
      <Form.Group className="mb-3 " controlId="formName">
        <Form.Label className='formText'>Name</Form.Label>
        <Form.Control className='textBox' type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label className='formText'>Email address</Form.Label>
        <Form.Control className='textBox' type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSubject">
        <Form.Label className='formText'>Subject</Form.Label>
        <Form.Control className='textBox' type="text" placeholder="Enter Subject" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label className='formText'>Message</Form.Label>
        <Form.Control className='textBox' type="text" placeholder="Enter Message" />
      </Form.Group>
  
      <Button variant="outline-secondary" type="submit" size='lg'>
        Submit
      </Button>
    </Form>

      <h2 className='boop emailText '>Other direct contact methods:</h2>
      <h2 className='boop emailText '>Phone: (209)-269-0588</h2>
      <h2 className='boop emailText '>Email: zacrice2222@gmail.com</h2>
    </div>
  );
};

export default Contact;
