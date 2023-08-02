import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg nwvbar-dark bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Projeto Spring Boot & React</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <button class="btn btn-outline-light" > + Usuario</button>
        </div>
      </nav>
    </div>
  )
}


