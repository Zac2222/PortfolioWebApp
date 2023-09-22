
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div>
      <iframe
      title="contact-form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScZJ66E3AgGnMH977uRqNyIVHn2FwTqY7aAdYEN0CqKbCnspA/viewform?embedded=true"
        style={{ width: "100%", height: "100vh", marginBottom: '-60px' }}
      >
        Loading…
      </iframe>

      <Form className='d-flex  flex-column align-items-center mb-5'>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Enter Message" />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      <h2 className='boop emailText '>Or email me at: zacrice2222@gmail.com</h2>
    </div>
  );
};

export default Contact;
