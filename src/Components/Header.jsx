import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LogoHeader from './../images/logo-header.svg'

class Header extends Component {
    constructor(props) {
        super(props)

        this.agregarCLass = this.agregarCLass.bind(this)
    }

    // Metodo para agregar la clase y el menu sea visible en pantallas chicas.
    agregarCLass() {
        const mainMenuHeader = document.getElementById('main-menu')
        mainMenuHeader.classList.toggle('active')
    }

    render() {
        return(
            <header className="main-header dark-color-theme">
                <div className="ed-grid s-grid-5 lg-grid-4">
                    <div className="s-cols-4 lg-cols-1 s-cross-center">
                        <NavLink to="/">
                            <img className="main-logo" src={LogoHeader} alt="Logo Conalep"/>
                        </NavLink>
                    </div>
                    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links" id="active-main-menu-header" onClick={this.agregarCLass}>
                    <nav className="main-menu letter-header" id="main-menu">
                        <ul>
                            <li><NavLink to="/informacion" activeClassName="activo"> Informacion </NavLink></li>
                            <li><NavLink to="/academia" activeClassName="activo"> Academia </NavLink></li>
                            <li><NavLink to="/conocenos" activeClassName="activo"> Conocernos </NavLink></li>
                            <li><NavLink to="/contacto" activeClassName="activo"> Contacto </NavLink></li>
                        </ul>
                    </nav>
                    <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
                    </div>
                </div>
            </header>
            )
        }
}

export default Header;