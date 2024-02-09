import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";


const MyNav = () => {
    return (
        <Container fluid className="mb-2 nav-style ">
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand href="#" className="fw-bold ms-5 fs-3 text-dark">
                    <img className="" src="./assets/img/Flas_meteo_logo_small-980x900.png" alt="Flash Meteo" />
                </Navbar.Brand>

                <Nav className="me-4 fs-5 ms-auto">
                    <Button className="ms-3 mt-2" variant="outline-light rounded-5">
                        <Link className="nav-link nav-button " to="/">
                            <ArrowLeft className="fs-2 mx-3 " />
                        </Link>
                    </Button>

                </Nav>

            </Navbar>
        </Container>
    );
};

export default MyNav;