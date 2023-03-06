import React from "react";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Orders from "./Orders";
import Clients from "./Clients";
import Services from "./Services";
import Results from "./Results";

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" className="navbar navbar-expand-lg navbar-light bg-light">
                <Container>
                    <NavbarToggle area-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-2 pe-1 justify-content-start w-100">
                            <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
                            <Link to="/orders" style={{ marginRight: '15px' }}>Orders</Link>
                            <Link to="/clients" style={{ marginRight: '15px' }}>Clients</Link>
                            <Link to="/services"  style={{ marginRight: '15px' }}>Services</Link>
                            <Link to="/results" >Results</Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/services" element={<Services />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </>
    );
}
export default Navigation;


