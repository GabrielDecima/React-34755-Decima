import React from 'react';
import './App.css'
import './componentes/NavBar';
import NavBar from './componentes/NavBar';
import CartWidget from './componentes/Cart/CartWidget'

const App = () => {
    return (
        <>
       <NavBar/> 
       <CartWidget/>
        </>


  );
}

export default App;

