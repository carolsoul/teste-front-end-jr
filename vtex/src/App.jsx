import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home/index';
import {PopUp} from './pages/PopUp/PopUp';
import styles from './App.module.css'
function App() {

  return (
    <>
      <article className={styles.header}>
        <div className='header_1'>
        <p> <img src="./assets/ShieldCheck.png" alt="Escudo-imagem" /> Compra <strong>100% segura</strong></p>
        <p> <img src="./assets/Truck.png" alt="Caminhao-imagem" /> <strong>Frete grátis</strong> acima de R$ 200</p>
        <p> <img src="assets/CreditCard.png" alt="Cartao-de-credito-imagem" /> <strong>Parcele</strong> suas compras</p>
        </div>
        <hr/>
        <header>
          <img src='./assets/Logo vtex.png' alt="Logo-Vtex-imagem"/>
          <div className='search_bar'>
            <p>O que você está buscando? <img src="assets/Lupa.png" alt="Lupa-imagem"/></p>
          </div>
          <div className='profile_options'>
            <img src="./assets/Package.png" alt="Pacote-imagem"/>
            <img src="./assets/Favourites.png" alt="Fvoritos-imagem"/>
            <img src="./assets/UserCircle.png" alt="Usuario-imagem"/>
            <img src="./assets/ShoppingCart.png" alt="Carrinho-imagem"/>
          </div>
        </header>
          <hr/>
          <nav>
            <ul>
              <li><a href="#">TODAS AS CATEGORIAS</a></li>
              <li><a href="#">SUPERMERCADO</a></li>
              <li><a href="#">LIVRO</a></li>
              <li><a href="#">MODA</a></li>
              <li><a href="#">LANÇAMENTOS</a></li>
              <li><a href="#">OFERTAS DO DIA</a></li>
              <li><a href="#"> <img src="./assets/CrownSimple.png" alt="Coroa-imagem" /> ASSINATURA</a></li>
            </ul>
          </nav>
      </article>

      <section class="banner">
        <img src="./assets/banner img.png" alt="Banner-imagem" height="390"/>
        <div class="banner-text">
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% Off nos produtos</h2>
          <button>Ver produto</button>
        </div>
      </section>
      <div>
      
      <div className='opcoes'>
        <div className='opcoes_box'><img src="./assets/tech.svg" alt="tecnologia-imagem" height={140}/>Tecnologia</div>
        <div className='opcoes_box'><img src="./assets/supermercado.svg" alt="supermercado-imagem" />Supermercado</div>
        <div className='opcoes_box'><img src="./assets/bebidas.svg" alt="bebidas-imagem" />Bebidas</div>
        <div className='opcoes_box'><img src="./assets/ferramentas.svg" alt="ferramentas-imagem" />Ferramentas</div>
        <div className='opcoes_box'><img src="./assets/saude.svg" alt="saude-imagem" />Saúde</div>
        <div className='opcoes_box'><img src="./assets/esportes.svg" alt="esporte-imagem" />Esporte e fitness</div>
        <div className='opcoes_box'><img src="./assets/moda.svg" alt="moda-imagem" />Moda</div>
      </div>
      <article className='produtos_relacionados'>
        <h2>Produtos Relacionados</h2>
        <nav>
        <ul>
            <li><a href="#">CELULAR</a></li>
            <li><a href="#">ACESSÓRIOS</a></li>
            <li><a href="#">TABLETS</a></li>
            <li><a href="#">NOTEBOOK</a></li>
            <li><a href="#">TVS</a></li>
            <li><a href="#">VER TODOS</a></li>
            </ul>
        </nav>
      </article>

      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/PopUp' element={<PopUp/>} />
      </Routes>
      </BrowserRouter>
      </div>

      <div className='parceiros_container'>
        <section className='parceiros'>
          <img src="./assets/cards_home.png" alt="Parceiros Imagem" />
          <div className='parceiros_content'>
            <h3>Parceiros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </section>

        <section className='parceiros'>
          <img src="./assets/cards_home.png" alt="Parceiros Imagem" />
          <div className='parceiros_content'>
            <h3>Parceiros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </section>
      </div>

      <div className='produtos_2'>
        <h2>Produtos Relacionados</h2>
        <h3><a href="">Ver todos</a></h3>
      </div>

      <div className='parceiros_container'>
        <section className='parceiros'>
          <img src="./assets/cards_home.png" alt="Parceiros Imagem" />
          <div className='parceiros_content'>
            <h3>Produtos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </section>

        <section className='parceiros'>
          <img src="./assets/cards_home.png" alt="Parceiros Imagem" />
          <div className='parceiros_content'>
            <h3>Produtos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </section>
      </div>

      <div className='marcas_title'>
      <h2>Navegue por marcas</h2>
      </div>
      <div className='marcas'>
        <img src="./assets/marca.png" alt="" />
        <img src="./assets/marca.png" alt="" />
        <img src="./assets/marca.png" alt="" />
        <img src="./assets/marca.png" alt="" />
        <img src="./assets/marca.png" alt="" />
      </div>

      <footer>
        <div className='sobre_nos'>
          <h2>SOBRE NÓS</h2>
          <ul>
            <li><a href="#">CONHEÇA</a></li>
            <li><a href="#">COMO COMPRAR</a></li>
            <li><a href="#">INDICAÇÃO E DESCONTO</a></li>
          </ul>

          <div className='social'>
            <a href="#"><img src="./assets/facebook.png" alt="facebook-logo"/></a>
            <a href="#"><img src="./assets/instagram.png" alt="instagram-logo"/></a>
            <a href="#"><img src="./assets/youtube.png" alt="youtube-logo"/></a>
          </div>
        </div>

        <div className='info'>
          <h2>INFORMAÇÕES ÚTEIS</h2>
          <ul>
            <li><a href="#">FALE CONOSCO</a></li>
            <li><a href="#">DÚVIDAS</a></li>
            <li><a href="#">PAZOS DE ENTREGA</a></li>
            <li><a href="#">FORMAS DE PAGAMENTO</a></li>
            <li><a href="#">POLÍTICA DE PRIVACIDADE</a></li>
            <li><a href="#">TROCAS E DEVOLUÇÕES</a></li>
          </ul>
        </div>

        <div className='pagamento'>
          <h2>FORMAS DE PAGAMENTO</h2>
          <div className='logos'>
          <img src="./assets/visa.png" alt="" />
          <img src="./assets/elo.png" alt="" />
          <img src="./assets/alelo.png" alt="" />
          <img src="./assets/dinners.png" alt="" />
          <img src="./assets/ifood.png" alt="" />
          <img src="./assets/mastercard.png" alt="" />
          <img src="./assets/pix.png" alt="" />
          <img src="./assets/amex.png" alt="" />
          <img src="./assets/ticket.png" alt="" />
          <img src="./assets/sodexo.png" alt="" />
          </div>
        </div>

        <div className='newsletter'>
          <p>CADASTRE-SE E RECEBA NOSSAS <br/> <strong>NOVIDADES E PROMOÇÕES</strong></p>
          <small>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</small>
          <br/>
          <label for="email"></label>
          <input type="email" id="email" name="email" required placeholder='SEU E-MAIL'></input>
          <button type="submit">OK</button>
        </div>
      </footer>
      
      <footer className='footer_2'>
        <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br/> É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>

        <div className='empresas'>
          <img src="./assets/econverse.png" alt="econverse-logo" />
          <img src="./assets/vtex.png" alt="vtex-logo" />
        </div>
      </footer>
    </>
  )
}

export default App

