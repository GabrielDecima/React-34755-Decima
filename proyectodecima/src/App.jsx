import React from 'react';
import './styles/App.css'
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/Cart/CartWidget'
import Contador from './componentes/Cart/Contador';
import Productos from './componentes/productos';
import Home from './componentes/home';

const App = () => {
    return (
        <>
       <NavBar/> 
       
       <ItemListContainer/>
        <Home/>
       

        </>


  );
}

export default App;

