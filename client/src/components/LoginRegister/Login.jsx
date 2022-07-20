import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    let navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/user/login", form, {'withCredentials': true})
        .then(resp => console.log(resp.data))
        .catch(err => console.log("Error: ", err))

        navigate("/", {replace: true})
    }
    return(
        <Form className='w-100'>
            <h2>Log In</h2>
            <Form.Group className='mb-3'>
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter email'
                    onChange={(e) => setForm({...form, email: e.target.value})}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter password'
                    onChange={(e) => setForm({...form, password: e.target.value})}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    );
}