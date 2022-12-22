import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'


 function Topo() {
    return (
        <header>
            <div className='limite-largura topo'>
                <img className="header-logo" src='assets/logo.png' alt="Logo"/>
                
                <nav>
                    <Link className='topo-link' to="/">Home</Link>
                    <Link className='topo-link' to="/sabores">Sabores</Link>
                    <Link className='topo-link' to="/sobre">Sobre</Link>
                </nav>

           </div>
            
        </header>

    );

}

export default Topo;