import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import { UserContext } from "../context/UserContext";
import axios from 'axios';
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import Home from "./Home";
import RecordForm from "./RecordForm";
import "../sass/main.scss";

export default function Main() {
    let [user, setUser] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/user', {'withCredentials':true})
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <UserContext.Provider value={{user, setUser}}>
        <Container fluid className='p-0 main'>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<LoginRegister />} />
                    <Route path="record" element={<RecordForm />}/>
                </Routes>
            </BrowserRouter>
        </Container>
        </UserContext.Provider>
    );
}