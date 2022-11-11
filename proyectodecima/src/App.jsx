import React from 'react';
import './styles/App.css'
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/Cart/CartWidget'
import Contador from './componentes/Cart/Contador';
import Productos from './componentes/productos';

const App = () => {
    return (
        <>
       <NavBar/> 
       
       <ItemListContainer/>
        <Productos/>
        </>


  );
}

export default App;

