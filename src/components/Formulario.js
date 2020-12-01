import React, { useContext, useState } from 'react'

import { CategoriasContext } from './../context/CategoriaContext.js'
import { RecetasContext } from './../context/RecetasContext.js'




const Formulario = () => {
    // state de los input
    const [ busqueda , guardarBusqueda ] = useState({
      nombre: '',
      categoria: ''
    });

    // Usamos useContext
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);


    // Funcion para leer los contenidos
    const obtenerDatos = e => {
      guardarBusqueda({
          ...busqueda,
          [e.target.name] : e.target.value
      })
    }

    // Funcion onSubmit
    const onSubmit = e => {
      e.preventDefault()
      buscarRecetas(busqueda)
      guardarConsultar(true)
    }

  return (

      <form
        className="col-md-12"
        onSubmit={onSubmit}
      >
        <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
        </fieldset>

        <div className="row mt-4">
          <div className="col-md-4">
            <input
              type="text"
              name="nombre"
              placeholder="Buscar por Ingrediente"
              onChange={obtenerDatos}
              className="form-control"
               />
          </div>
          <div className="col-md-4">
              <select
                className="form-control"
                name="categoria"
                onChange={obtenerDatos}
              >
                <option value="">-- Selecciona Categoría --</option>
                {categorias.map((categoria) => (
                    <option
                    key={categoria.strCategory}
                    value={categoria.strCategory}
                    >
                    {categoria.strCategory}
                    </option>
                ))}

              </select>
          </div>
          <div className="col-md-4">
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="Buscar Bebidas"

               />
          </div>
        </div>
      </form>
  )
}

export default Formulario
