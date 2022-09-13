import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
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
    const [form, setForm] = useState({userId: "", jobId: "", interviewNote: "", note: ""})
    const [interviewNote, setInterviewNote] = useState([])
    const [note, setNote] = useState([])
    const {state} = useLocation()
    const {detail, index, userId} = state

    useEffect(() => {
        setJobDetail({...detail, index: index})
        const jobId = detail._id
        setForm({...form, userId: userId, jobId: jobId})
        axios.get(`http://localhost:8000/api/note/${userId}/${jobId}`)
        .then(resp => {
            setInterviewNote(resp.data.interviewNote)
            setNote(resp.data.note)
            console.log(resp)})
        .catch(err => console.log(err))
    }, [])

    const submitInterviewNote = (e) => {
        e.preventDefault()
        console.log('interview note')
        axios.post('http://localhost:8000/api/note', form)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    const submitNote = (e) => {
        e.preventDefault()
        console.log('note')
    }
    return(
        <Container id="detailRecord">
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
            <Row>
                <Col>
                    <h3>Interview Notes</h3>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={submitInterviewNote}>
                    <Form.Group as={Row} className="mb-3">
                        <Col xs="12" sm="12">
                            <Form.Control as="textarea" rows={2} onChange={(e) => setForm({...form, interviewNote: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Row className="justify-content-end">
                        <Col xs="12" sm="3">
                            <Button className="btn btn-primary w-100" type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
            <Row>
                <Col>
                    <h3>Note</h3>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={submitNote}>
                    <Form.Group as={Row} className="mb-3">
                        <Col xs="12" sm="12">
                            <Form.Control as="textarea" rows={2}  onChange={(e) => setForm({...form, note: e.target.value})}/>
                        </Col>
                    </Form.Group>
                    <Row className="justify-content-end">
                        <Col xs="12" sm="3">
                            <Button className="btn btn-primary w-100" type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    );
}