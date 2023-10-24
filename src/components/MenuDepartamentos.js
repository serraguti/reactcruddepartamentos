import React, { Component } from 'react'
import logoHome from './../assets/images/spiderman.png';
import { NavLink } from 'react-router-dom';

export default class MenuDepartamentos extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logoHome} alt="Logo" width="30" height="34" class="d-inline-block align-text-top"/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                    New Departamento
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
