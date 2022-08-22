import { Row, Col, Container, Table, Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import "../sass/profilepage.scss";
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
const [listing, setListing] = useState([])
const [status, setStatus] = useState({"applied": [], "interview": [], "rejected": []})
const {user} = useContext(UserContext)
const navigate = useNavigate()

useEffect(() => {
    if(user._id !== "") {
        axios.get(`http://localhost:8000/api/jobs/${user._id}`, {"withCredentials": true})
        .then(resp => {
            // console.log(resp.data)
            setListing(resp.data.jobs)
            const applied = resp.data.jobs.filter(item => item.status === "applied")
            const interview = resp.data.jobs.filter(item => item.status === "interview")
            const rejected = resp.data.jobs.filter(item => item.status === "rejected")
            // console.log(applied)
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
            <Row id="amount" className='d-flex justify-content-center'>
                <Col xs={4} sm={2} className='status'>
                    <p>
                    &#10240; {status.applied.length}
                    </p>
                    <p>
                        Applied
                    </p>
                </Col>
                <Col xs={4} sm={2} className='status'>
                    <p>
                    &#10240; {status.interview.length}
                    </p>
                    <p>
                        Interview
                    </p>
                </Col>
                <Col xs={4} sm={2} className='status'>
                    <p>
                    &#10240; {status.rejected.length}
                    </p>
                    <p>
                        Rejected
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end mb-3'>
                    <Button className="btn btn-primary" onClick={() => navigate('/record')}>&#43; Another Job</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Job Title</th>
                                <th>Company</th>
                                <th>Position</th>
                                <th>Experience</th>
                                <th>Applied Date:</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listing.map((item, index) => {
                                const date = new Date(item.appliedDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
                                return (<tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.jobTitle}</td>
                                    <td>{item.company}</td>
                                    <td>{item.position}</td>
                                    <td>{item.experience}</td>
                                    <td>{date}</td>
                                    <td>
                                        {item.status}
                                        &#10240;<Button className='btn btn-primary'>Update</Button>
                                    </td>
                                </tr>);
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}