import React from 'react';
import Rodape from '../../componentes/Rodape';
import Topo from '../../componentes/Topo';
import './estilo.css'

export default function Sobre() {
    return (
        <div>
            <Topo/>
            <main>
                <section className='sobre-banner'>
                    <h1 className='titulo-banner'>A Gelateria</h1>
                </section>
                <section className='seccao-sobre'>
                    <h2>Sobre Nós</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete
                        para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas
                        para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <br/>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar
                        junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas
                        e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o
                        melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                    </p>
                </section>
                <section className='sobre-imagens'>
                    <div>
                        <img className='sobre-imagens-img' src='assets/sobre-image.jpg'alt='Equipe'/>                        
                    </div>
                    <div>
                        <img className='sobre-imagens-img' src='assets/sorveteria.jpg' alt='Sorveteria'/>
                    </div>
                </section>
            </main>
            <Rodape/>
        </div>
    );

}