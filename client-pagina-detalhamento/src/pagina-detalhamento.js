import Cabecalho from './componentes/cabecalho';
import Tabela from './componentes/tabela-detalhamento'
import Informacoes from './componentes/informacoes'
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
