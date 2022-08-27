import {Row, Col, Table, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecordTable({listing}) {
    const [entry, setEntry] = useState([])

    useEffect(() => {
        setEntry(listing)
    }, [listing])

    const changeStatus = (id, status, index) => {
        console.log(id, status)
        axios.patch("http://localhost:8000/api/job/status", {_id:id, status: status}, {"withCredentials": true})
        .then(resp => {
            let newEntry = [...entry]
            newEntry[index] = resp.data
            setEntry(newEntry)
            console.log(resp)})
        .catch(err => console.log(err))

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
                            return (<tr key={index} className="table-row">
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