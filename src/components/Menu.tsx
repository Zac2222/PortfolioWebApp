import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../CSS/Menu.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


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
          <Nav className='ml-auto'>
            <Nav.Link className='mx-3' href={'/resume.pdf'} target="_blank"><FontAwesomeIcon icon={faFilePdf} size="2x"/></Nav.Link>
            <Nav.Link className='mx-3' as={Link} to={'https://www.linkedin.com/in/zac-rice-20575a2a3/'} target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Nav.Link>
            <Nav.Link className='mx-3' as={Link} to={'https://github.com/Zac2222'} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;