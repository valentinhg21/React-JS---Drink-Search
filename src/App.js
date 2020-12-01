import React from 'react';

import Header from './components/Header.js'
import Formulario from './components/Formulario.js'
import ListaRecetas from './components/ListaRecetas.js'


import CategoriasProvider from './context/CategoriaContext.js'
import RecetasProvider from './context/RecetasContext.js'
import ModalProvider from './context/ModalContext.js'

function App() {


  return (
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>
              <Header />
              <div className="container mt-5">
                <div className="row">
                  <Formulario />
                </div>
                <ListaRecetas />
              </div>
          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
  )
}

export default App;
