import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const anoCopy = new Date().getFullYear()

  return (
    <>
      <header>
        <h1><abbr title="Fundação Instituto de Pesquisas Econômicas">FIPE</abbr> <span>APIrequests</span></h1>
      </header>
      <main>
        <p>Busque preços de veículos com o <abbr title="Fundação Instituto de Pesquisas Econômicas">FIPE</abbr> APIrequests. Selecione a marca, o modelo e o ano. Com isso, encontre os preços médios desses veículos no Brasil.</p>

        <form action="">
          <div className="formulario">
            <label htmlFor="marca">Marca</label>
            <select name="marca" id="marca">
            
            </select>

            <label htmlFor="modelo">Modelo</label>
            <select name="modelo" id="modelo">

            </select>

            <label htmlFor="ano">Ano</label>
            <select name="ano" id="ano">

            </select>
          </div>

          <button type="submit" id="submit">PROCURAR PREÇO</button>
        </form>
      </main>
      <footer>
          <p>&copy; {anoCopy} FIPE APIrequests</p>
      </footer>
    </>
  )
}

export default App