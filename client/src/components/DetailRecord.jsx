import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ChangeStatus from "./Profile/ChangeStatus";
import axios from 'axios';
import '../sass/detailRecord.scss';

export default function DetailRecord() {
    const [jobDetail, setJobDetail] = useState({
        _id : String | null,
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
        setForm({...form, userId: userId, jobId: detail._id})
        axios.get(`http://localhost:8000/api/note/${userId}/${detail._id}`)
        .then(resp => {
            setInterviewNote(resp.data.interviewNote)
            setNote(resp.data.note)
        })
        .catch(err => console.log(err))
    }, [])

    const changeStatus = (id, status, prevStatus, index) => {
        console.log(id, status, prevStatus, index)
        axios.patch("http://localhost:8000/api/job/status", {userId: form.userId, _id: form.jobId, state: status}, {"withCredentials": true})
        .then(() => {
            setJobDetail({...jobDetail, status: status})
        })
        .catch(err => console.log(err))
    }
    const submitInterviewNote = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/interviewNote', form)
        .then(resp => {
            setInterviewNote(resp.data)
            console.log(resp)})
        .catch(err => console.log(err))
    }

    const submitNote = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/note', form)
        .then(resp => {
            setNote(resp.data)
            console.log(resp)})
        .catch(err => console.log(err))
    }
    return(
        <Container id="detailRecord">
            <Row className="d-flex align-items-center">
                <Col>
                    <h1><b>#{jobDetail.index} {jobDetail.jobTitle}</b></h1>
                </Col>
                <Col className="d-flex justify-content-end">
                    <ChangeStatus item={jobDetail} index={index} changeStatus={changeStatus}/>
                </Col>
            </Row>
            <Row>
                <ul>
                    <li><h4><span>Company:</span> {jobDetail.company}</h4></li>
                    <li><h4><span>Position:</span> {jobDetail.position}</h4></li>
                    <li><h4><span>Experience:</span> {jobDetail.experience}</h4></li>
                    <li><h4><span>Applied Date:</span> {(new Date(jobDetail.appliedDate)).toLocaleDateString('en-US',{weekday: 'long', year:  'numeric', month: 'long', day: 'numeric'})}</h4></li>
                </ul>
            </Row>
            <Row>
                <Col>
                    <h3>Interview Notes</h3>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={submitInterviewNote} className="noteForm">
                    <Form.Group as={Row} className="mb-0">
                        <Col xs="12" sm="10">
                            <Form.Control as="textarea" rows={2} onChange={(e) => setForm({...form, interviewNote: e.target.value})}/>
                        </Col>
                        <Col xs="12" sm="2" className="mt-3 mt-sm-0">
                            <Button className="btn btn-primary w-100 h-100" type="submit"><b>Add</b></Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Col>
                    <ul>
                        {interviewNote.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Note</h3>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={submitNote} className="noteForm">
                    <Form.Group as={Row} className="mb-0">
                        <Col xs="12" sm="10">
                            <Form.Control as="textarea" rows={2}  onChange={(e) => setForm({...form, note: e.target.value})}/>
                        </Col>
                        <Col xs="12" sm="2" className="mt-3 mt-sm-0">
                            <Button className="btn btn-primary w-100 h-100" type="submit"><b>Add</b></Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Col>
                    <ul>
                        {note.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}