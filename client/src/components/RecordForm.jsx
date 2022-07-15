import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Paper from '../svg/Paper';
export default function RecordForm() {
    return(
        <Container>
            <h1>Record</h1>
            <Row>
                <Col>
                    <Form>
                        <Form>
                            <h2>Job Detail</h2>
                            <Form.Group className='mb-3'>
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Position</Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Applied Date</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Button variant='primary'>Submit</Button>
                        </Form>
                    </Form>
                </Col>
                <Col>
                    <span><Paper/></span>
                </Col>
            </Row>
        </Container>
    );
}