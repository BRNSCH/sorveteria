import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

export default function Home() {
    return (
        <div>
            <Topo />
            <main>

                <section className='banner-home'>
                    <div>
                        <h1 className='home-banner'>SORVETE ARTESANAL</h1>
                    </div>
                </section>

                <section className='home-descricao'>
                
                    <img src="assets/banner-sabores.jpg" alt="Banner Sabores"/>
                    <div className='home-descricao-div'>
                        <h2>NOSSOS SABORES</h2>
                        <p> Novos e Deliciosos!</p>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria
                           todos os nossos produtos são naturais, à base de frutas e sem nenhum
                           conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer
                           e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                        </p>

                    </div>

                </section>
                <section className='home-descricao'>
                    <div className='home-descricao-div home-descricao-posicao-01'>
                        <h2>NOSSOS EVENTOS</h2>
                        <p> Delicias com sorvete!</p>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos
                           para te atender e oferecer os melhores eventos com os melhores sorvete da sua
                           vida! Venha nos conhecer e passar um tempo aqui com a gente.

                        </p>

                    </div>
                    <img src='assets/eventos-image.jpg' alt="Banner Eventos" />

                </section>
                
                <section className='home-descricao'>
                    <img src="assets/sobre-image.jpg" alt="Banner Sobre Nós" />
                    <div className='home-descricao-div'>
                        <h2>SOBRE NÓS</h2>
                        <p> Alegria em cada casquinha!</p>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no
                           mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode
                           ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e
                           o melhor sorvete da cidade.

                        </p>

                    </div>

                </section>
   
            </main>
            

            <Rodape/>
       </div>
        
    );

}