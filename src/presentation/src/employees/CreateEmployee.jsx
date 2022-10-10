import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ApiClient } from '../apiClient';

const apiClient = new ApiClient();

export const CreateEmployee = () => {

    const [id , setId] = useState('');
    const [fullName , setFullName] = useState('');
    const [email , setEmail] = useState('');
    const [nationality , setNationality] = useState('');

    const handleSubmit = (event) => {
        apiClient.createEmployee(id, fullName, email, nationality);
    };

    return ( 
        <>
            <Form className='content'> 
                <Form.Label>Create Employee</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Control type="id" value={ id } placeholder="Enter id" onChange = { (event) =>
                        {setId(event.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Control type="fullName" value={ fullName } placeholder="Enter full name" onChange = { (event) =>
                        {setFullName(event.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email"  value={ email } placeholder="Enter email" onChange = { (event) =>
                        {setEmail(event.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNationality">
                    <Form.Control type="nationality"  value = { nationality } placeholder="Enter nationality" onChange = { (event) =>
                        {setNationality(event.target.value)}} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick = { handleSubmit }>
                    Submit
                </Button>
            </Form>
        </>
    )
}

