import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Register() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/register', form, {'withCredentials': true})
        .then(resp => console.log(resp.data))
        .catch(err => console.log("Error: ", err))
    }
    return(
        <Form className='w-100' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <Form.Group className='mb-3'>
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Enter username' 
                    onChange={(e) => setForm({...form, username: e.target.value})}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter email'
                    onChange={(e) => setForm({...form, email: e.target.value})}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter password'
                onChange={(e) => setForm({...form, password: e.target.value})}
            />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                type='text'
                placeholder='Confirm password'
                onChange={(e) => setForm({...form, confirm: e.target.value})}
            />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    );
}