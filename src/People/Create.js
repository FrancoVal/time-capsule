import '../App.css'
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {

    return (
        <div className="main">
            <h2 className="main-header">Crear usuarios</h2>
            <CreateForm />
        </div>
    );
}

function CreateForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://63852bd8beaa6458265aee49.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
    }
    return (
        <Form className="create-form">
            <Form.Field>
                <label>Nombre del usuario </label>
                <input placeholder='Nombre del usuario' onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Apellido del usuario </label>
                <input placeholder='Apellido del usuario' onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='Acepto los Terminos y Condiciones' onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
            <Button onClick={postData} type='submit'>Cargar</Button>
        </Form>)
}