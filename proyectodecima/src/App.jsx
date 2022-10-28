import React from 'react';
import './styles/App.css'
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/Cart/CartWidget'

const App = () => {
    return (
        <>
       <NavBar/> 
       
       <ItemListContainer/>
        </>


  );
}

export default App;

