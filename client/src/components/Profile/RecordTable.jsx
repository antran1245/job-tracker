import {Row, Col, Table, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RecordTable({listing}) {
    const [entry, setEntry] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        setEntry(listing)
    }, [listing])

    const changeStatus = (id, status, index) => {
        axios.patch("http://localhost:8000/api/job/status", {_id:id, status: status}, {"withCredentials": true})
        .then(resp => {
            let newEntry = [...entry]
            newEntry[index] = resp.data
            setEntry(newEntry)
            console.log(resp)})
        .catch(err => console.log(err))

    }

    const viewDetail = (job, index) => {
        navigate('/detail', {state: {detail: job, index:index}})
    }
    return(
        <Row style={{overflowY: 'visible'}}>
            <Col>
                <Table striped bordered hover responsive>
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
                        {entry.map((item, index) => {
                            const date = new Date(item.appliedDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
                            return (<tr key={index} className="table-row" onClick={() => viewDetail(item, index)}>
                                <td>{index+1}</td>
                                <td>{item.jobTitle}</td>
                                <td>{item.company}</td>
                                <td>{item.position}</td>
                                <td>{item.experience}</td>
                                <td>{date}</td>
                                <td>
                                    <div className='dropdown'>
                                        <Button className='btn btn-primary'>{item.status}</Button>
                                        <div className='dropdown-content'>
                                            <p onClick={() => changeStatus(item._id, "interview", index)}>Interview</p>
                                            <p onClick={() => changeStatus(item._id, "rejected", index)}>Rejected</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>);
                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}