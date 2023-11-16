import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../CSS/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
// service_sfefcpy

// template_s5vygb6

// rh4MhULi-Xh_PZVWT

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sfefcpy",
        "template_s5vygb6",
        {
          from_name: form.name,
          to_name: "Zac",
          from_email: form.email,
          to_email: "zacrice2222@gmail.com",
          message: form.message,
        },
        "rh4MhULi-Xh_PZVWT"
      )
      .then(() => {
        setShowModal(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
        (error) => {
          setLoading(false);
          console.log(error, "Whoa an error!");

          alert('Something went wrong please try again.')
        }
      );
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

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

      <Form
        className="d-flex  flex-column align-items-center mb-5"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Form.Group className="mb-3 " controlId="formName">
          <Form.Label className="formText">Name</Form.Label>
          <Form.Control
            className="textBox"
            type="text"
            placeholder="Enter Name"
            name="name"
            value={Form.name}
            onChange={handleChange}
           
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="formText">Email address</Form.Label>
          <Form.Control
            className="textBox"
            type="email"
            placeholder="Enter Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label className="formText">Subject</Form.Label>
          <Form.Control
            className="textBox"
            type="text"
            placeholder="Enter Subject"
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label className="formText">Message</Form.Label>
          <Form.Control
            className="textBox"
            type="text"
            placeholder="Enter Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="buttonTheme" type="submit" size="lg" >
        Send
        {/* {loading ? "Sending..." : "Sent!"} */}
        </Button>
      </Form>

      <div>
      <h2 className="boop emailText ">Other direct contact methods:</h2>
      <h2 className="boop emailText ">Phone: (209)-269-0588</h2>
      <h2 className="boop emailText ">Email: zacrice2222@gmail.com</h2>

      </div>

      <Modal className="modalStyle" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton  >
          <Modal.Title  className='modalText'>Email sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <span className='modalText'> I will get back to you as soon as possible!</span> 
        </Modal.Body>
        <Modal.Footer >
          <Button className="buttonTheme" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Contact;
