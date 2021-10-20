import React from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
        <Link to="/home" ><img className='img img-fluid' src={logo} alt="" /></Link>
        <div>

        </div>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand"> <h1> <span className='text-danger fs-1'>Medi</span><span className='text-warning'>Plus</span></h1> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/doctor'>Doctor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/about'>About</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    user.displayName &&
                                    <span>{user.displayName}</span>
                                }
                                {user.photoURL &&
                                    <img style={{ width: '30px', height: '30px' }} src={user.photoURL} alt="" />
                                }
                                <li className="nav-item">
                                    {user.email ?
                                        <button onClick={logOut}>Log Out</button>
                                        :
                                        <Link className="nav-link" to='/login'><button className='reg-btn'>Register</button></Link>
                                    }
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );

};

export default Header;