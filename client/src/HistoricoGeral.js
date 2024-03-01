import './HistoricoGeral.css'
import React , { useEffect, useState }from 'react'

import UserInfo from './components/UserInfo'
import SearchBar from './components/SearchBar'


function HistoricoGeral() {

  // backendData => json
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

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