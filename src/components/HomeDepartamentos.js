import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import loadingImage from './../assets/images/loading.gif';
import { NavLink } from 'react-router-dom';

export default class HomeDepartamentos extends Component {
    state = {
        departamentos: [],
        status: false
    }

    loadDepartamentos = () => {
        var request = "api/departamentos";
        var url = Global.apiDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamentos: response.data, 
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

  render() {
    if (this.state.status == false){
        return (<div>
            <img src={loadingImage}/>
        </div>)
    }else{
        return (
            <div>
                <h1>Home Departamentos</h1>
                {
                    this.state.status == true && 
                    (
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Localidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.departamentos.map((departamento, index) => {
                                    return (<tr key={index}>
                                        <td>{departamento.nombre}</td>
                                        <td>{departamento.localidad}</td>
                                        <td>
                                            <NavLink className="btn btn-success"
to={"/details/" + departamento.numero 
+ "/" + departamento.nombre + "/" + departamento.localidad}>
                                                Details
                                            </NavLink>
<NavLink className="btn btn-danger"                                            
to={"/delete/" + departamento.numero}>
    Delete
</NavLink>
<NavLink className="btn btn-info"
to={"/update/" + departamento.numero}>
    Update
</NavLink>
                                        </td>
                                    </tr>)    
                                })
                            }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
  }
}
