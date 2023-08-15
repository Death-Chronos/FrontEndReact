import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewUser() {
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        //Aqui ele define o user e seus campos, e também a função que altera seu estado, setuser

    })
    useEffect(() => {
        const loadUser = async () => {
            const result = await axios.get(`http://localhost:8080/user/${id}`)
            setUser(result.data)
        }
        loadUser()
        // Isso aqui é para puxar da API o user a ser mostrado

    }, [id])



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4'>Detalhes do Usuário</h2>
                    <div className="card">
                        <div className="card-header">
                            <ul className='list-group list-group-flush'>
                                <li className="list-group-item">
                                    <b>Nome: {user.name}</b>
                                </li>
                                <li className="list-group-item">
                                    <b>Usuario: {user.username}</b>
                                </li>
                                <li className="list-group-item">
                                    <b>Email: {user.email}</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-success my-2' to={"/"}> Voltar</Link>
                </div>
            </div>
        </div>
    )
}
