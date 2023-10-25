import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamento from './CreateDepartamento';
import DetalleDepartamento from './DetalleDepartamento';
import EliminarDepartamento from './EliminarDepartamento';
import UpdateDepartamento from './UpdateDepartamento';
export default class Router extends Component {
  render() {
    function UpdateDepartamentoElement () {
      var {iddepartamento} = useParams();
      return <UpdateDepartamento iddepartamento={iddepartamento}/>
    }

    function EliminarDepartamentoElement() {
        var {iddepartamento} = useParams();
        return <EliminarDepartamento iddepartamento={iddepartamento}/>
    }

    function DetalleDepartamentoElement() {
        var {iddepartamento, nombre, localidad} = useParams();
        return <DetalleDepartamento iddepartamento={iddepartamento}
            nombre={nombre} localidad={localidad}/>
    }

    return (
      <BrowserRouter>
        <MenuDepartamentos/>
        <Routes>
            <Route path="/" element={<HomeDepartamentos/>}/>
            <Route path="/create" element={<CreateDepartamento/>}/>
            <Route path="/details/:iddepartamento/:nombre/:localidad" 
                element={<DetalleDepartamentoElement/>}/>
            <Route path="/delete/:iddepartamento" 
                element={<EliminarDepartamentoElement/>}/>
            <Route path="/update/:iddepartamento"
              element={<UpdateDepartamentoElement/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
