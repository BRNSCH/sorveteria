
import React from 'react';

import Topo from '../../componentes/Topo/';
import Rodape from '../../componentes/Rodape/';
import './estilo.css'


export default function Sabores() {
    return (
        <div>
            <Topo />
            <main>
                <section className='sabores-banner'>
                    <h1 className='titulo-banner'>NOSSOS SABORES</h1>
                </section>
                <section className='sabores-limite-largura'>
                    <h2>SABORES DE SORVETE</h2>
                    <div className='sabores'>
                        <div className='sabores-card'>
                            <img src='assets/sabor-oreo.png' alt='Sabor Oreo' />
                            <div className='sabores-card-descricao'>
                                <span className='sabores-card-span'>Sorvete de Oreo</span>
                                <div className='sabores-card-spaco'></div>
                                <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>
                        </div>
                        <div className='sabores-card'>
                            <img src='assets/sabor-pistache.png' alt='Sabor Pistache' />
                            <div className='sabores-card-descricao'>
                                <span className='sabores-card-span'>Sorvete Pistache</span>
                                <div className='sabores-card-spaco'></div>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                           </div>
                        </div>
                        <div className='sabores-card'>
                            <img src='assets/sabor-cookies-avela.png' alt='' />
                            <div className='sabores-card-descricao'>
                                <span className='sabores-card-span'>Sorvete Cookies & Avelã</span>
                                <div className='sabores-card-spaco'></div>
                                <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                            </div>
                        </div>
                        <div className='sabores-card'>
                            <img src='assets/sorbet-kiwi.png' alt='' />
                            <div className='sabores-card-descricao'>
                                <span className='sabores-card-span'>Sorvete de Kiwi</span>
                                <div className='sabores-card-spaco'></div>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                            </div>
                        </div>
                        <div className='sabores-card'>
                            <img src='assets/sorbet-morango.png' alt='' />
                            <div className='sabores-card-descricao'>
                                <span className='sabores-card-span'>Sorvete de Morango</span>
                                <div className='sabores-card-spaco'></div>
                                <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                            </div>
                        </div>
                        <div className='sabores-card'>
                            <img src='assets/sorbet-limao.png' alt='' />
                            <div className='sabores-card-descricao'>
                                <span className='sabores-card-span'>Sorvete de Limão Siciliano</span>
                                <div className='sabores-card-spaco'></div>
                                <p>O incrível sorvete gourmet de limão siciliano vai te encantar</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Rodape/>

       </div>

    );

}