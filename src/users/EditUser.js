import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function EditUser() {
    let navigate = useNavigate();

    const {id}=useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });
    const { name, username, email } = user
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(()=> {
      loadUser();
    },[])

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    }
    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4'>Edição de Usuarios</h2>
                    <form onSubmit={(e) => onSubmit(e)} method="post">
                        <div className="mb-3">
                            <label htmlFor="Name" className='form-label'>Nome</label>
                            <input type={"text"} className='form-control' placeholder='Digite o seu nome'
                                name='name' value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className='form-label'>Nome de Usuario</label>
                            <input type={"text"} className='form-control' placeholder='Digite o seu nome de usuario'
                                name='username' value={username} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className='form-label'>Email</label>
                            <input type={"email"} className='form-control' placeholder='Digite o seu email'
                                name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button className='btn btn-outline-success m-2'>Editar</button>
                        <Link className='btn btn-outline-warning m-2' to={'/'}>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

