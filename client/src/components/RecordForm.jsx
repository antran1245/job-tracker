import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import "../sass/record.scss";
import Paper from '../svg/Paper';
export default function RecordForm() {
    return(
        <Container>
            <h1>Record</h1>
            <Row>
                <Col xs={{span: 12, order: 'last'}} md={{span:6, order: 'first'}}>
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
                </Col>
                <Col className='icon mb-3 mb-md-0' xs={{span: 12, order: 'first'}} md={{span: 6, order: 'last'}}>
                    <span><Paper/></span>
                </Col>
            </Row>
        </Container>
    );
}