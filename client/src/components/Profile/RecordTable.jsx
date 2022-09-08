import {Row, Col, Table, Button} from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

export default function RecordTable({listing}) {
    const [entry, setEntry] = useState([])
    const {user} =  useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        setEntry(listing)
    }, [listing])

    const changeStatus = (id, status, index) => {
        axios.patch("http://localhost:8000/api/job/status", {userId:  user._id, _id: id, status: status}, {"withCredentials": true})
        .then(resp => {
            let newEntry = resp.data.jobs
            setEntry(newEntry)
            console.log(resp)
            })
        .catch(err => console.log(err))

    }

    const viewDetail = (e, job, index) => {
        if (e.target.localName === "td") {
            navigate('/detail', {state: {detail: job, index:index, userId: user._id}})
        }
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
                            return (<tr key={index} className="table-row" onClick={(e) => viewDetail(e,item, index)}>
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
                                            {item.status !== 'applied' && <p onClick={() => changeStatus(item._id, "applied", index)}>Applied</p>}
                                            {item.status !== 'interview' && <p onClick={() => changeStatus(item._id, "interview", index)}>Interview</p>}
                                            {item.status !== 'rejected' && <p onClick={() => changeStatus(item._id, "rejected", index)}>Rejected</p>}
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