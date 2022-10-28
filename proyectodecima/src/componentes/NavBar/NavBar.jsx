import React from 'react';
import ItemListContainer from '../itemListContainer';
import CartWidget from '../Cart/CartWidget';
import Dropdown from './Dropdown';
import Form from './Form';

const NavBar = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tienda Online GD</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <Dropdown/>
       <CartWidget/>
      </ul>
        <Form busqueda="Buscar Producto"/>
    </div>
  </div>
</nav> 
        </>
    );
}

export default NavBar;
