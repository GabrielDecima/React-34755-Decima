import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './styles/App.css'
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import Contador from './componentes/Cart/Contador';
import Home from './componentes/home';
import Carrito from './componentes/carrito';
import About from './componentes/about';
import Contacto from './componentes/contacto';


const App = () => {
    return (
        <>
       
       <BrowserRouter>
          <NavBar/>

         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/producto" element={<ItemListContainer/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/carrito" element={<Carrito/>} />
          </Routes> 

       </BrowserRouter>
      
        </>


  );
}

export default App;

