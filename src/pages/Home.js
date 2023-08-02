import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Home() {
    useEffect(() => {
        loadUsers();
    }, [])

    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8080/users')
        setUsers(result.data);
    }

    return (
        <div class="container">
            <div className="py-4">
                <table class="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nome de Usuário</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
