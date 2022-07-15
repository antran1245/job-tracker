import { Container, Row, Col } from 'react-bootstrap';
import Paper from '../svg/Paper';
import '../sass/home.scss';

export default function Home() {
    return(
        <Container>
            <Row>
                <Col xs={12} sm={4} lg={2}>
                    <Paper />
                </Col>
                <Col className='header'>
                    <Row>
                        <h1>Track Your Applications</h1>
                    </Row>
                </Col>
            </Row>
            <Row>
                Apply
            </Row>
            <Row>
                Record
            </Row>
            <Row>
                Track
            </Row>
        </Container>
    );
}