import React from 'react'
import { Fragment } from 'react';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Fragment>
            <header id="sticky-menu" className="header header-2">
                <div className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 col-xs-8">
                                <div className="header-left">
                                    <div className="logo">
                                        <NavLink to="/" ><img src="assets/img/home/ecart-logo.png" alt="" /></NavLink><br />
                                    </div>
                                    <div className="desktop-menu">
                                        <ul>
                                            <li><NavLink to='/'>Home</NavLink></li>
                                            <li><NavLink to='/products'>Products</NavLink></li>
                                            <li><NavLink to='/products/'>Apparels</NavLink></li>
                                            <li><NavLink to='/products/'>Furniture</NavLink></li>
                                            <li><NavLink to='/products/'>Appliances</NavLink></li>
                                            <li><NavLink to='/aboutus'>About Us</NavLink></li>
                                            <li><NavLink to='/contactus'>Contact</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default NavBar

