import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import '../sass/navigation.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    const {user, setUser} = useContext(UserContext);

    const logout = () => {
        axios.get('http://localhost:8000/api/user/logout', {'withCredentials': true});
        setUser({_id: "", username: ""})
    }
    return(
        <Navbar id='navigation' expand='md'>
            <Container>
                <Navbar.Brand><Link className='text-white' to="/">Job Tracker</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls='toggler-navbar'/>
                <Navbar.Collapse id='toggler-navbar'>
                    <Nav className='ms-auto'>
                        <Link className='me-3' to="/">Home</Link>
                        <Link className='me-3' to="record">Record</Link>
                        {user._id === ""?
                            <Link to="login">Login / Sign Up</Link> : <Link to="" onClick={logout}>Logout</Link>}
                    </Nav>
                </Navbar.Collapse>
                <Nav className='ms-3'>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUserLarge} className="fa-lg"/>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}