import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import "../sass/loginRegister.scss";

export default function LoginRegister() {
    return (
        <Container>
            <Row id='loginRegister' className='mt-5'>
                <Col sm={5}>
                    <Form>
                        <h2>Log In</h2>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control type='text' placeholder='Enter email'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type='text' placeholder='Enter password'/>
                        </Form.Group>
                        <Button variant='primary' type='submit'>Submit</Button>
                    </Form>
                </Col>
                <Col sm={{offset: 1, span: 5}} className="mt-3 mt-sm-0">
                    <Form>
                        <h2>Sign Up</h2>
                        <Form.Group className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text' placeholder='Enter username'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='text' placeholder='Enter email'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='text' placeholder='Enter password'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='text' placeholder='Confirm password'/>
                        </Form.Group>
                        <Button variant='primary' type='submit'>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}