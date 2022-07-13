import {Container, Row, Col} from 'react-bootstrap';

export default function LoginRegister() {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <div className='box'>
                        login
                    </div>
                </Col>
                <Col>
                    <div className='box'>
                        register
                    </div>
                </Col>
            </Row>
        </Container>
    )
}