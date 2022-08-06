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
import ProfilePage from "./ProfilePage";

export default function Main() {
    let [user, setUser] = useState({_id: "", name: ""})
    useEffect(() => {
        axios.get('http://localhost:8000/api/user', {'withCredentials':true})
        .then(resp => {
            setUser({
                _id: resp.data.user._id,
                name: resp.data.user.name
            })
        })
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
                    <Route path="profile" element={<ProfilePage/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
        </UserContext.Provider>
    );
}