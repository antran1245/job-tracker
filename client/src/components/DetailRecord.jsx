import { useEffect, useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from 'axios';

export default function DetailRecord() {
    const [jobDetail, setJobDetail] = useState({
        jobTitle: String | null,
        company: String | null,
        position: String | null,
        experience: String | null,
        appliedDate: String | null,
        status: String | null,
        index: String | null
    })
    const [interviewNote, setInterviewNote] = useState([])
    const [note, setNote] = useState([])
    const {user} = useContext(UserContext)
    const {state} = useLocation()
    const {detail, index} = state

    useEffect(() => {
        setJobDetail({...detail, index: index})
        const userId = user._id
        const jobId = detail._id
        axios.get(`http://localhost:8000/api/note/${userId}/${jobId}`)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        console.log(detail, index)
    }, [])
    return(
        <Container>
            <Row>
                <Col>
                    <h1>#{jobDetail.index} {jobDetail.jobTitle}</h1>
                </Col>
                <Col>
                    <button>{jobDetail.status}</button>
                </Col>
            </Row>
            <Row>
                <ul>
                    <li>Company: {jobDetail.company}</li>
                    <li>Position: {jobDetail.position}</li>
                    <li>Experience: {jobDetail.experience}</li>
                    <li>Applied Date: {jobDetail.appliedDate}</li>
                </ul>
            </Row>
        </Container>
    );
}