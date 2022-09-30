import React from 'react';

const Dropdown = () => {
    return (
        <>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Zapatillas</a>
            <a className="dropdown-item" href="#">Remeras</a>
            <a className="dropdown-item" href="#">Pantalones</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Promociones</a>
          </div>
        </li>  
        </>
    );
}

export default Dropdown;
