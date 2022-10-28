import React from 'react';
import {BsCart2} from 'react-icons/bs';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <BsCart2 />? </h3>
  }
}


const CartWidget = () => {
    return (
        <>
        <div className='d-flex m-auto p-2'><BsCart2/></div>
        
    
        </>
    );
}

export default CartWidget;
