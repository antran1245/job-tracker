import { Container, Row, Col } from 'react-bootstrap';
import "../sass/loginRegister.scss";
import Login from './LoginRegister/Login';
import Register from './LoginRegister/Register';

export default function LoginRegister() {

    return (
        <Container id='loginRegister'>
            <Row>
                <Col sm={5}>
                    <Login/>
                </Col>
                <Col sm={{offset: 1, span: 5}} className="mt-3 mt-sm-0">
                    <Register />
                </Col>
            </Row>
        </Container>
    )
}