import {Row, Col, Table, Button} from 'react-bootstrap';

export default function RecordTable({listing}) {
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
                                    {item.status}
                                    &#10240;<Button className='btn btn-primary'>&#x22EF;</Button>
                                </td>
                            </tr>);
                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}