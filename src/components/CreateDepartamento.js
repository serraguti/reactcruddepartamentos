import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    
    state = {
        status: false
    }

    insertDepartamento = (e) => {
        e.preventDefault();
        var id = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var loc = this.cajaLocalidad.current.value;
        //CREAMOS UN OBJETO DEPARTAMENTO CON LAS PROPIEDADES DEL JSON
        var departamento = {
            numero: id, 
            nombre: nombre, 
            localidad: loc
        }
        var request = "api/departamentos";
        var url = Global.apiDepartamentos + request;
        axios.post(url, departamento).then(response => {
            this.setState({
                status: true
            })
        })
    }

  render() {
    if (this.state.status == true){
        return (<Navigate to="/"/>)
    }else{
        return (
            <div>
                <h1>Create Departamento</h1>
                <form style={{width: "500px", margin: "0 auto"}}>
                    <label>Id Departamento:</label>
                    <input type="number" ref={this.cajaNumero} className='form-control'/>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre} className='form-control'/>
                    <label>Localidad: </label>
                    <input type="text" ref={this.cajaLocalidad} className='form-control'/>
                    <button className='btn btn-info' onClick={this.insertDepartamento}>
                        Create
                    </button>
                </form>
            </div>
        )
    }
  }
}
