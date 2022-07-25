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
                <section>
                    <h2>Applied</h2>
                    <p>You just applied for a job. What now?</p>
                </section>
            </Row>
            <Row>
                <section>
                    <h2>Record</h2>
                    <p>Come here and record down the job information.</p>
                </section>
            </Row>
            <Row>
                <section>
                    <h2>Update</h2>
                    <p>Update the record as you get update from </p>
                </section>
            </Row>
        </Container>
    );
}