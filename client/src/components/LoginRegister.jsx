import {Container, Row, Col, Form} from 'react-bootstrap';

export default function LoginRegister() {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <Form className='box'>
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
                <Col>
                    <Form className='box'>
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