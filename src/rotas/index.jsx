import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from '../paginas/Home';
import Sabores from '../paginas/Sabores';
import Sobre from '../paginas/Sobre';

function Rotas() {
    return (
        
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home /> } />
                <Route path='/Sabores' element={<Sabores /> } />
                <Route path='/Sobre' element={<Sobre /> } />
            


            </Routes>
        
        
        </HashRouter>



    )
}

export default Rotas;