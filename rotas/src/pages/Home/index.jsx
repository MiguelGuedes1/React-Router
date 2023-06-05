import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Home = () => {


    return (
        <div>
            <h1>Esta é a pagina de Home</h1>
            <div>
                <Link to="/Contacto">Link para a página contactos</Link>
            </div>

            <div>
                <Link to="/Dicas">Link para a página Dicas</Link>
            </div>

            <div>
                <Link to="/Login">Link para a página Login</Link>
            </div>






        </div>
    )
}

export default Home