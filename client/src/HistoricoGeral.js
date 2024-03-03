import './HistoricoGeral.css'

import UserInfo from './components/UserInfo'
import SearchBar from './components/SearchBar'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

function HistoricoGeral() {

  return (
    <>
      <div>
        <Cabecalho />
        <div className='UsrInfoDiv'>
          <UserInfo />
        </div>
        <div>
          <SearchBar />
        </div>
        <Rodape />
      </div>
    </>
  );
}

export default HistoricoGeral;