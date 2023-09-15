import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../CSS/Menu.css';

function Menu() {
  return (
    <div className= 'mx-3'>
    <Navbar expand="lg">
        <Navbar.Brand href="#home">Zac Rice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <h2 className='dot mx-2'>•</h2>
            <Nav.Link href="#home">About Me</Nav.Link>
            <h2 className='dot mx-2'>•</h2>
            <Nav.Link href="#link">Projects</Nav.Link>
            <h2 className='dot mx-2'>•</h2>
            <Nav.Link href="#link">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Menu;