import React from 'react';
import {Link} from 'react-router-dom'
import { FcList } from "react-icons/fc";

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FcList /> ?</h3>
  }
}

const Dropdown = () => {
    return (
        <>
          <li className="nav-item dropdown">
          <a className="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><button className='btn'><FcList/></button></a>
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
