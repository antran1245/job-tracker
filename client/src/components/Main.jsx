import { Container } from 'react-bootstrap';
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";

export default function Main() {
    return(
        <Container fluid className='p-0'>
            <Navigation />
            <LoginRegister />
        </Container>
    );
}