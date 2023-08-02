import React, {useState} from 'react'

export default function AddUser() {

    const [user, setUser] = useState({
        name: "",
        username:"",
        email:"",
    });
    const {name,username,email} = user
    const onInputChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    }
return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Cadastro de Usuarios</h2>
                <div className="mb-3">
                    <label htmlFor="Name" className='form-label'>Nome</label>
                    <input type={"text"} className='form-control' placeholder='Digite o seu nome'
                        name='name' value={name}  onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className='form-label'>Nome de Usuario</label>
                    <input type={"text"} className='form-control' placeholder='Digite o seu nome de usuario'
                        name='username' value={username}  onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className='form-label'>Email</label>
                    <input type={"email"} className='form-control' placeholder='Digite o seu email'
                        name='email' value={email}  onChange={(e)=>onInputChange(e)}/>
                </div>
                <button className='btn btn-outline-success m-2'>Cadastrar</button>
                <button className='btn btn-outline-warning m-2'>Cancelar</button>
            </div>
        </div>
    </div>
)
}
