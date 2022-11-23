import ItemListContainer from '../itemListContainer';
import CartWidget from '../Cart/CartWidget';
import Dropdown from './Dropdown';
import Form from './Form';
import React from 'react';
import {Link} from 'react-router-dom'
import { FcAbout,FcHome,FcContacts } from "react-icons/fc";

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FcHome /> ? <FcContacts/> ? <FcAbout/></h3>
  }
}


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
          <Link className="nav-link active" to="/"><button className='btn'><FcHome/></button></Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/contacto"><button className='btn'><FcContacts/></button> </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about"><button className='btn'><FcAbout/></button> </Link>
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
