import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ProfilePage() {
const [listing, setListing] = useState([])

useEffect(() => {
    
}, [])
    return(
        <>
            <Row>
                Hello, Name
            </Row>
            <Row>
                Currently you have
            </Row>
            <Row>
                applied
            </Row>
            <Row>
                interviewed
            </Row>
            <Row>
                denied
            </Row>
        </>
    );
}