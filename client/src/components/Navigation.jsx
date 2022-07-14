import { Container, Navbar, Nav } from 'react-bootstrap';
import '../sass/navigation.scss';

export default function Navigation() {
    return(
        <Navbar id='navigation' expand='md'>
            <Container>
                <Navbar.Brand href="">Job Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls='toggler-navbar'/>
                <Navbar.Collapse id='toggler-navbar'>
                    <Nav className='ms-auto'>
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Login / Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}