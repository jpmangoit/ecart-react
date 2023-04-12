import React from 'react'
import { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';

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
                                        <NavLink to="/home" ><img src="assets/img/home/ecart-logo.png" alt="" /></NavLink><br />
                                    </div>
                                    <div className="desktop-menu">
                                        <ul>
                                            <li><Link className="active" to='/home'>Home</Link></li>
                                            <li><Link to='/products'>Products</Link></li>
                                            <li><Link to='/aboutus'>Apparels</Link></li>
                                            <li><Link to='/aboutus'>Furniture</Link></li>
                                            <li><Link to='/aboutus'>Appliances</Link></li>
                                            <li><Link to='/aboutus'>About Us</Link></li>
                                            <li><Link to='/contact'>Contact</Link></li>
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

