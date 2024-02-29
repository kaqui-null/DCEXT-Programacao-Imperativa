import './HistoricoGeral.css'
import React from 'react'

import UserInfo from './components/UserInfo'
import SearchBar from './components/SearchBar';


function HistoricoGeral() {
  return (
    <>
      <div>

        <div className='UsrInfoDiv'>
          <UserInfo />
        </div>
        <div>
          <SearchBar />
        </div>

      </div>
    </>
  );
}

export default HistoricoGeral;