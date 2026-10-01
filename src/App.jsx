import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const anoCopy = new Date().getFullYear()

  return (
    <>
      <header>
        <h1>FIPE <span>APIrequests</span></h1>

        <div>
          <span>☀️</span><span>🌙</span>
        </div>
      </header>
      <main>
        <form action="">
          <select name="marca" id="marca">
            
          </select>

          <select name="modelo" id="modelo">

          </select>

          <select name="ano" id="ano">

          </select>

          <button type="submit"></button>
        </form>
      </main>
      <footer>
          <p>&copy; {anoCopy} FIPE APIrequests</p>
      </footer>
    </>
  )
}

export default App