import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../CSS/Menu.css';
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <Navbar className='mx-3' expand="lg" >
        <Navbar.Brand  as={Link} to={'/'}>Zac Rice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <h2 className='dot mx-2'>•</h2>
            <Nav.Link as={Link} to={'/AboutMe'}>More about Me</Nav.Link>
            <h2 className='dot mx-2'>•</h2>
            <Nav.Link as={Link} to={'/Projects'}>Projects</Nav.Link>
            <h2 className='dot mx-2'>•</h2>
            <Nav.Link as={Link} to={'/Contact'}>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;