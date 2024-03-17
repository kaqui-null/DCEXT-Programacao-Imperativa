import Cabecalho from './components/cabecalho';
import Tabela from './components/tabela-detalhamento'
import Informacoes from './components/informacoes'
import './pagina-detalhamento-geral.css';

function PaginaDetalhamento() {
  return (
    <div>
      <Cabecalho/>
      <Informacoes/>
      <Tabela/>
    </div>
  );
}

export default PaginaDetalhamento;
