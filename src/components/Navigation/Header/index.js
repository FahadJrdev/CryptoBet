import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Themetab from '../../Themetab';
import { FaFacebookF, FaGoogle, FaTelegramPlane } from "react-icons/fa";
const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleLoginForm = () => {
    setActive(!isActive);
  }
  return (
    <header className="header">
        <div className="container">
            <div className="header__layout">
                <div className="header--left">
                    <div className="logo-header">
                        <Link to="/">
                            <img src="images/logo/logo.png" alt="CryptoBet" />
                        </Link>
                    </div>
                    <Themetab />
                </div>
                <div className="header--right">
                    <div className="login">
                        <div onClick={toggleLoginForm} className={`button header-button header-button--login ${isActive?"active":""}`} data-login-toggle=""><span>Sign in</span></div>
                        <div className={`login__wrapper ${isActive?"opened":""}`}>
                            <p className="login__description"> Use your socials </p>
                            <ul className="socials">
                                <li  onClick={toggleLoginForm} className="socials__item ">
                                    <a className="socials__link facebook " href="https://facebook.com">
                                        <FaFacebookF className='icon-facebook' />
                                    </a>
                                </li>
                                <li  onClick={toggleLoginForm} className="socials__item ">
                                    <a className="socials__link google " href="https://google.com">
                                        <FaGoogle className='icon-google' />
                                    </a>
                                </li>
                                <li  onClick={toggleLoginForm} className="socials__item ">
                                    <a className="socials__link telegram " href="https://telegram.com">
                                        <FaTelegramPlane className='icon-telegram' />
                                    </a>
                                </li>
                            </ul>
                            <p className="login__description"> Log in with phone or email </p>
                            <Link  onClick={toggleLoginForm} to="/login" className="button   header-button header-button--login" data-test="nav-login-head"><span>Sign in</span></Link>
                        </div>
                    </div>
                    <Link to="/registration" className="button   header-button header-button--registration" data-test="nav-reg-head"><span>Sign up</span></Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;