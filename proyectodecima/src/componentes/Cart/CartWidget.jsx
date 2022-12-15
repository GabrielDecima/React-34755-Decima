import {Link} from 'react-router-dom'
import React from 'react';
import {BsCart2} from 'react-icons/bs';
import Swal from 'sweetalert2';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <BsCart2 />? </h3>
  }
}




const CartWidget = () => {
    return (
        <>
        <Link className='d-flex m-auto p-2' to="/carrito"><BsCart2/>
        </Link>
      
   
        </>
    );
}

export default CartWidget;
