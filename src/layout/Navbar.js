import React from 'react'
import { Link } from 'react-router-dom'
import spring from '../images/springio-icon.svg'
import react from '../images/reactjs-icon.svg'


export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg nwvbar-dark bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
          Projeto Spring Boot & React
            <img src={spring} alt=""  class="ms-2"/>
            <img src={react} alt="" class="rounded float-start me-2"/>
            
          </a>
          <Link class="btn btn-outline-light" to={"/addUser"}> + Usuario</Link>
        </div>
      </nav>
    </div>
  )
}


