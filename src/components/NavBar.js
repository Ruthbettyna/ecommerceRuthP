import React from 'react'

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
        <img src="/public/assets:imagenes/sneakers.png" className="logo" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href="#"> Principal <span class="sr-only"></span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"> Productos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"> Nosotros</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false"> Contacto
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#"></a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </li>
        </ul>
    </div>
    </nav>
    )
}

export default NavBar