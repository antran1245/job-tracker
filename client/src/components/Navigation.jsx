import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../sass/navigation.scss';

export default function Navigation() {
    return(
        <Navbar id='navigation' expand='md'>
            <Container>
                <Navbar.Brand><Link className='text-white' to="/">Job Tracker</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls='toggler-navbar'/>
                <Navbar.Collapse id='toggler-navbar'>
                    <Nav className='ms-auto'>
                        <Link className='me-3' to="/">Home</Link>
                        <Link className='me-3' to="record">Record</Link>
                        <Link to="login">Login / Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}