import React from 'react';
import './footer.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebookF, FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { Providers } from '../Cards/CategoryInfo';
const Footer = ({showPop}) => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__layout">
                <div className="footer__layout--top">
                    <div className="footer__header">
                        <h2 className="footer__title">Payment methods</h2>
                        <a href="#payment-methods" className="read-more__button">View all</a>
                    </div>
                    <div className="footer-payments">
                        <ul className="footer-payments__list">
                            <li className="footer-payments__list--item">
                                <a className="footer-payments__list--item-link" href="#!">
                                    <img src="images/footer/payments/bitcoin.svg" alt="Payment icon" />
                                </a>
                            </li>
                            <li className="footer-payments__list--item">
                                <a className="footer-payments__list--item-link" href="#!">
                                    <img src="images/footer/payments/visa.svg" alt="Payment icon" />
                                </a>
                            </li>
                            <li className="footer-payments__list--item">
                                <a className="footer-payments__list--item-link" href="#!">
                                    <img src="images/footer/payments/mastercard.svg" alt="Payment icon" />
                                </a>
                            </li>
                            <li className="footer-payments__list--item">
                                <a className="footer-payments__list--item-link" href="#!">
                                    <img src="images/footer/payments/royalpay.svg" alt="Payment icon" />
                                </a>
                            </li>
                            <li className="footer-payments__list--item">
                                <a className="footer-payments__list--item-link" href="#!">
                                    <img src="images/footer/payments/paypal.svg" alt="Payment icon" />
                                </a>
                            </li>
                            <li className="footer-payments__list--item">
                                <a className="footer-payments__list--item-link" href="#!">
                                    <img src="images/footer/payments/wechat.svg" alt="Payment icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__layout--middle">
                    <div className="footer__header">
                        <h2 className="footer__title">Providers</h2>
                        <a onClick={()=>{showPop(Providers, "none", "block", "Providers")}} href="#provider-menu" className="read-more__toggle" data-provider-menu="">
                            <MdKeyboardArrowDown className='icon-arrow-down' />
                        </a>
                    </div>
                    <div className="footer-providers">
                        <ul className="footer-providers__list">
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/charismatic">
                                    <img src="images/footer/providers/charismatic.png" alt="Charismatic" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/egt">
                                    <img src="images/footer/providers/egt.png" alt="EGT" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/yggdrasil">
                                    <img src="images/footer/providers/ygg.png" alt="Yggdrasil" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/pragmatic">
                                    <img src="images/footer/providers/pragmatic.png" alt="Pragmatic" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/relax-gaming">
                                    <img src="images/footer/providers/relax.png" alt="Relax Gaming" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/redtiger">
                                    <img src="images/footer/providers/redtiger.png" alt="RedTiger" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/bgaming">
                                    <img src="images/footer/providers/bgaming.png" alt="Bgaming" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/booongo">
                                    <img src="images/footer/providers/booongo.png" alt="Booongo" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/dlv">
                                    <img src="images/footer/providers/dlv.png" alt="Dlv" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/thunderkick">
                                    <img src="images/footer/providers/thunder.png" alt="Thunderkick" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/fantasma">
                                    <img src="images/footer/providers/Fantasma.png" alt="Fantasma" />
                                </a>
                            </li>
                            <li className="footer-providers__list--item">
                                <a className="footer-providers__list--item-link" href="/gameGroup/just-for-the-win">
                                    <img src="images/footer/providers/justforthe.png" alt="Just For The Win" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__layout--bottom">
                    <div className="footer__social-wrapper">
                        <div className="footer__logo">
                            <img src="images/logo/logo.svg" alt="logo" />
                            <a href="/">
                                <img src="images/logo/logo.png" alt="CryptoBet" />
                            </a>  
                        </div>
                        <ul className="socials">
                            <li className="socials__item active">
                                <a className="socials__link" href="/" target="_blank">
                                    <FaFacebookF className='icon-facebook' />
                                </a>
                            </li>
                            <li className="socials__item active">
                                <a className="socials__link " href="/" target="_blank">
                                    <FaInstagram className='icon-instagram' />
                                </a>
                            </li>
                            <li className="socials__item active">
                                <a className="socials__link " href="/" target="_blank">
                                    <FaTwitter className='icon-twitter' />
                                </a>
                            </li>
                            <li className="socials__item active">
                                <a className="socials__link " href="/" target="_blank">
                                    <FaTelegramPlane className='icon-telegram' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__menu--wrapper">          
                        <div className="footer__menu">
                            <span className="footer__menu--title">Games</span>
                            <ul className="footer__menu-list">
                                <li className="footer__menu--item"><a href="/gameType/slot-games" className="footer__menu--item-link">Slots</a></li>
                                <li className="footer__menu--item"><a href="/gameType/video-poker" className="footer__menu--item-link">Poker</a></li>
                                <li className="footer__menu--item"><a href="/gameType/card-games" className="footer__menu--item-link">Card games</a></li>
                                <li className="footer__menu--item"><a href="/gameType/lottery" className="footer__menu--item-link">Lottery</a></li>
                                <li className="footer__menu--item"><a href="/gameType/table-games" className="footer__menu--item-link">Table games</a></li>
                                <li className="footer__menu--item"><a href="/gameType/video-poker" className="footer__menu--item-link">Video poker</a></li>
                                <li className="footer__menu--item"><a href="/gameType/roulette" className="footer__menu--item-link">Roulette</a></li>
                                <li className="footer__menu--item"><a href="/gameType/live-casino" className="footer__menu--item-link">Live casino</a></li>
                            </ul>
                        </div>
                        <div className="footer__menu">
                            <span className="footer__menu--title">Useful tips</span>
                            <ul className="footer__menu-list">
                                <li className="footer__menu--item"><a href="/info/responsible" className="footer__menu--item-link">Responsible Gaming</a></li>
                                <li className="footer__menu--item"><a href="/info/terms-of-us" className="footer__menu--item-link">Terms of Use</a></li>
                                <li className="footer__menu--item"><a href="/events/default/list" className="footer__menu--item-link">Events</a></li>
                                <li className="footer__menu--item"><a href="/info/about" className="footer__menu--item-link">About casino</a></li>
                                <li className="footer__menu--item"><a href="/help" className="footer__menu--item-link">Contacts</a></li>
                            </ul>
                        </div>
                        <div className="footer__menu">
                            <span className="footer__menu--title">Information</span>
                            <ul className="footer__menu-list">
                                <li className="footer__menu--item"><a href="/faq/default/index" className="footer__menu--item-link">FAQ</a></li>
                                <li className="footer__menu--item"><a href="/info/loyalty" className="footer__menu--item-link">Loyalty program</a></li>
                                <li className="footer__menu--item"><a href="/info/terms_article" className="footer__menu--item-link">Save Play</a></li>
                                <li className="footer__menu--item"><a href="/info/terms_article" className="footer__menu--item-link">Terms and conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <div className="footer__copyright--text">
                            <p>
                                © 2022 Demo Casino. All rights reserved...
                            </p>
                        </div>
                        <div className="footer__copyright--logo">
                            <img src="images/footer/xxx.png" alt="xxx" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;