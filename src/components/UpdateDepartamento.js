import React, { Component } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

export default class UpdateDepartamento extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef(); 

    state = {
        departamento: {},
        statusGet: false,
        statusUpdate: false
    }

    findDepartamento = () => {
        var request = "api/departamentos/" +
            this.props.iddepartamento;
        var url = Global.apiDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data,
                statusGet: true
            })
        })
    }

    componentDidMount = () =>  {
        this.findDepartamento();
    }

    updateDepartamento = (e) => {
        e.preventDefault();
        //EL METODO PUT PUEDE TENER DOS PARAMETROS
        //1) URL DE ACCESO AL SERVICIO
        //2) LOS DATOS A ENVIAR A DICHO SERVICIO
        var id = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLocalidad.current.value;
        var data = {
            numero: id,
            nombre: nombre, 
            localidad: localidad
        }
        var request = "api/departamentos";
        var url = Global.apiDepartamentos + request;
        axios.put(url, data).then(response => {
            this.setState({
                statusUpdate: true
            })
        })
    }
  render() {
    return (
        <div>
            {
                this.state.statusUpdate == true &&
                (<Navigate to="/"/>)
            }
            <NavLink to="/">Back to list</NavLink>
            <h1 style={{color:"blue"}}>
                UpdateDepartamento {this.props.iddepartamento}
            </h1>
            {
                this.state.statusGet == true &&
                (
                    <form style={{width: "500px", margin: "0 auto"}}>
                        <input type="hidden"
                        defaultValue={this.state.departamento.numero}
                            ref={this.cajaNumero}/>
                        <label>Nombre</label>
                        <input type="text"
                        defaultValue={this.state.departamento.nombre}
                            ref={this.cajaNombre} className='form-control'/>
                        <label>Localidad</label>
                        <input type="text" 
                        defaultValue={this.state.departamento.localidad}
                            ref={this.cajaLocalidad} className='form-control'/>
                        <button onClick={this.updateDepartamento}
                        className='btn btn-outline-info'>
                            Update
                        </button>
                    </form>
                )
            }
        </div>
    )
  }
}
