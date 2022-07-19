import { Form, Button } from 'react-bootstrap';

export default function Login() {
    return(
        <Form className='w-100'>
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
    );
}