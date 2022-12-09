import React, {useContext} from 'react';
import { DarkModeContext } from '../context/darkModeContext';

const Contacto = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const datosFormulario = React.useRef()

    const consultarForm = (e) =>{
        e.preventDefault()
        const dataForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(dataForm))
    }


        
    return (

        <>
            {/* Agregando DarkMode */}
        <div className= {darkMode ? 'darkMode container': 'container'}>

                 <button onClick ={() => toggleDarkMode()}>Modo de visualización</button>

            <form onSubmit={consultarForm} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="Nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="Nombre" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Ingresar tu Email de contacto.</div>
                </div>

                <div className="mb-3 form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" name="consulta" style={{height: '100px'}} defaultValue={""} />
                    <label htmlFor="consulta">Cual es tu consulta?</label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Formulario</button>
            </form>

            </div>

        </>
    );
}

export default Contacto;
