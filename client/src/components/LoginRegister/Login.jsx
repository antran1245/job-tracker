import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/user/login", form, {'withCredentials': true})
        .then(resp => {
            console.log(resp.data)
            setUser({_id: resp.data.user._id, username: resp.data.user.username})
            navigate("/", {replace: true})
        })
        .catch(err => console.log("Error: ", err))

    }
    return(
        <Form className='w-100' onSubmit={handleSubmit}>
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