import {useState} from 'react';
import {Link} from 'react-router-dom'
import schimg from '../../imgs/sch-link.svg';
// import { Nav,NavDropdown } from 'react-bootstrap';
// import icone_menu from '../img/icone_menu.png';

import styles from './Cabecalho.module.css';

//Cabeçalho que Benny fez com algumas alterações

function Cabecalho(){
    const [mostrarInfo, setMostrarInfo] = useState(false);
  
    const Info = () => {
      setMostrarInfo(!mostrarInfo);
    }
    return(
      <header>
        <div className={styles.cabecalho}>
          <img className={styles.img_logo_sch} src={schimg} alt='logo do sch'></img>
          {/* <button className={styles.botao_menu} onClick={Info}><img className={styles.img_botao_menu} src={icone_menu} alt = 'botão para exibir as opçoes de navegação'></img></button> */}
          {/* acho que ficaria mais organizado pra versão mobile usar  o botão  */}
          {/* {mostrarInfo && ( */}
            <div className={styles.opcoes_do_menu}>
              <ul>
                <li className={styles.item}>
                  <Link to= "/">Início</Link>
                </li>
                <li className={styles.item}>
                  <Link to= "/Servicos">Serviços</Link>
                </li>
                <li className={styles.item}>
                  <Link to= "/Entrar">Entrar</Link>
                </li>
                {/* <Nav>
                <NavDropdown title="User name" className={styles.logout}>
                  <NavDropdown.Item>Sair</NavDropdown.Item>
                </NavDropdown>
                </Nav> */}
              </ul>
             

              
            </div>
          {/* )} */}
        </div>
      </header>
    );
  }

  export default Cabecalho 