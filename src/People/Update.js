import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';


export default function Update() {

    return (
        <div className="main">
            <h2 className="main-header">Actualizar usuarios</h2>
            <UpdateForm />
        </div>
    );
}

function UpdateForm() {
    const [id, setID] = useState(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
            firstName,
             lastName,
             checkbox
        })
    }
    return (
        <Form className="create-form">
                <Form.Field>
                    <label>Nombre del usuario</label>
                    <input placeholder='Nombre del usuario' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Apellido del usuario</label>
                    <input placeholder='Apellido del usuario' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Acepto los Terminos y Condiciones' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
    );
}