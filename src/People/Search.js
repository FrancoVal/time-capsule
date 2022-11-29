import '../App.css'
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Search() {

    return (
        <div className="main">
            <h2 className="main-header">Actualizar usuarios</h2>
            <SearchForm />
        </div>
    );
}

function SearchForm() {
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63852bd8beaa6458265aee49.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const onDelete = (id) => {
        axios.delete(`https://63852bd8beaa6458265aee49.mockapi.io/fakeData/${id}`)
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre </Table.HeaderCell>
                        <Table.HeaderCell>Apellido </Table.HeaderCell>
                        <Table.HeaderCell>Chequeado </Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to="/update">
                                    <Table.Cell>
                                        <button onClick={() => setData(data)} class="positive ui button">Actualizar</button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <button onClick={() => onDelete(data.id)}>Eliminar</button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

        </div>
    )
}