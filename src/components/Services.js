import React from 'react';
import {Navbar} from "react-bootstrap";
import {Button, Form} from "reactstrap";

const Services = () => {
    return (
        <>
            <Navbar className="navbar navbar-light bg-light">
                <a className="navbar-brand ms-5 mt-4 me-auto px-0" style={{ margin: '0' }}>Job</a>
                <Form inline="true" className="d-flex align-items-center">
                    <Button variant="outline-info" className="btn btn-info mx-0"> + Create new job</Button>
                </Form>
            </Navbar>
        </>
    );
};

export default Services;