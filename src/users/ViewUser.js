import React from 'react'

export default function ViewUser() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4'>Detalhes do Usuário</h2>
                    <div className="card">
                        <div className="card-header">
                            <ul className='list-group list-group-flush'>
                                <li className="list-group-item">
                                    <b>Nome:</b>
                                </li>
                                <li className="list-group-item">
                                    <b>Usuario:</b>
                                </li>
                                <li className="list-group-item">
                                    <b>Email:</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-success my-2' to={"/"}></Link>
                </div>
            </div>
        </div>
    )
}
