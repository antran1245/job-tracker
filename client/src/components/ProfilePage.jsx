import { Row, Col } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import "../sass/profilepage.scss";

export default function ProfilePage() {
const [listing, setListing] = useState([])
const {user} = useContext(UserContext)
useEffect(() => {
    if(user._id !== null) {
        axios.get(`http://localhost:8000/api/jobs/${user._id}`, {"withCredentials": true})
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err))
    }
}, [user])
    return(
        <>
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
            <Row id="amount">
                <Col xs={6} sm={2}>
                    <p>
                        applied
                    </p>
                    <p>
                    &#10240;number
                    </p>
                </Col>
                <Col xs={6} sm={2}>
                    <p>
                        interviewed
                    </p>
                    <p>
                    &#10240;number
                    </p>
                </Col>
                <Col xs={6} sm={2}>
                    <p>
                        denied
                    </p>
                    <p>
                    &#10240;number
                    </p>
                </Col>
            </Row>
        </>
    );
}