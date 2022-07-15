import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Container } from 'react-bootstrap';
import "../sass/main.scss";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import Home from "./Home";
import RecordForm from "./RecordForm";

export default function Main() {
    return(
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
    );
}