import { useState, useContext } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import "../sass/record.scss";
import Paper from '../svg/Paper';
import axios from 'axios';

export default function RecordForm() {
    const { user } = useContext(UserContext);
    const [form, setForm] =  useState({
        jobTitle: "",
        company: "",
        position: "",
        appliedDate:""
    })
    const navigate = useNavigate()
    const handleSubmit =  (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/job/new/${user._id}`, form, {'withCredentials': true})
        .then(resp => {
            navigate('/profile')
            console.log(resp)
        })
        .catch(err => console.log(err))
    }
    return(
        <Container>
            <Row className='mt-3'>
                <Col xs={{span: 12, order: 'last'}} md={{span:6, order: 'first'}}>
                    <Form className='p-4' onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Paper size={100}/>
                            </Col>
                            <Col>
                                <h2>Input Job Detail</h2>
                            </Col>
                        </Row>
                        <Form.Group className='mb-3'>
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type='text' onChange={(e) => setForm({...form, jobTitle: e.target.value})}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control type='text' onChange={(e) => setForm({...form, company: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Position</Form.Label>
                            <Form.Control type='text' onChange={(e) => setForm({...form, position: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Applied Date</Form.Label>
                            <Form.Control type="date" onChange={(e) => setForm({...form, appliedDate: e.target.value})}/>
                        </Form.Group>
                        <Button variant='primary' className='w-100' type='submit'>Submit</Button>
                    </Form>
                </Col>
                <Col className='icon mb-3 mb-md-0' xs={{span: 12, order: 'first'}} md={{span: 6, order: 'last'}}>
                    <span><Paper/></span>
                </Col>
            </Row>
        </Container>
    );
}