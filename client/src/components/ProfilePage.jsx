import { Row, Col, Container, Table, Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import NumberStatus from './Profile/NumberStatus';
import RecordTable from './Profile/RecordTable';
import axios from 'axios';
import "../sass/profilepage.scss";

export default function ProfilePage() {
const [listing, setListing] = useState([])
const [status, setStatus] = useState({"applied": [], "interview": [], "rejected": []})
const {user} = useContext(UserContext)
const navigate = useNavigate()

useEffect(() => {
    if(user._id !== "") {
        axios.get(`http://localhost:8000/api/jobs/${user._id}`, {"withCredentials": true})
        .then(resp => {
            setListing(resp.data.jobs)
            const applied = resp.data.jobs.filter(item => item.status === "applied")
            const interview = resp.data.jobs.filter(item => item.status === "interview")
            const rejected = resp.data.jobs.filter(item => item.status === "rejected")
            setStatus({"applied": applied, "interview": interview, "rejected": rejected})
        })
        .catch(err => console.log(err))
    }
}, [user])
    return(
        <Container>
            <Row>
                <Col>
                <h2>
                    Hello there,
                </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                <h4>
                    Currently you have
                </h4>
                </Col>
            </Row>
            <NumberStatus status={status}/>
            <Row>
                <Col className='d-flex justify-content-end mb-3'>
                    <Button className="btn btn-primary" onClick={() => navigate('/record')}>&#43; Another Job</Button>
                </Col>
            </Row>
            <RecordTable listing={listing}/>
        </Container>
    );
}