import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const anoCopy = new Date().getFullYear()

  return (
    <>
      <header>
        <h1>FIPE <span>APIrequests</span></h1>
      </header>
      <main>
        <p>Busque preços de veículos com o FIPE APIrequests. Selecione a marca, o modelo e o ano.</p>
        <form action="">
          <label htmlFor="marca">Marca</label>
          <select name="marca" id="marca">
            
          </select>

          <label htmlFor="modelo">Modelo</label>
          <select name="modelo" id="modelo">

          </select>

          <label htmlFor="ano">Ano</label>
          <select name="ano" id="ano">

          </select>

          <button type="submit">PROCURAR PREÇO</button>
        </form>
      </main>
      <footer>
          <p>&copy; {anoCopy} FIPE APIrequests</p>
      </footer>
    </>
  )
}

export default App