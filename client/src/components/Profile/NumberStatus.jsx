import { Col, Row } from "react-bootstrap";
import "../../sass/profilepage.scss";

export default function NumberStatus({status}) {
    return(
        <Row className="justify-content-center">
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
    );
}