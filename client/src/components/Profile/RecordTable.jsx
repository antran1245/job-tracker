import {Row, Col, Table, Button} from 'react-bootstrap';
import axios from 'axios';

export default function RecordTable({listing}) {
    const changeStatus = (status) => {
        console.log(status)
    }
    return(
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
                                            <p onClick={() => changeStatus("interview")}>Interview</p>
                                            <p onClick={() => changeStatus("denied")}>Rejected</p>
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