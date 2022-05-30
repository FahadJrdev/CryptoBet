import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { BiLeftArrow } from "react-icons/bi";
import { IoPlayOutline, IoSearchOutline, IoDocumentOutline } from "react-icons/io5";
import { MdArrowRight, MdOutlineFavoriteBorder, MdOutlineSportsBaseball, MdOutlineMonetizationOn, MdOutlineChatBubbleOutline, MdSportsBaseball } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Themetab from '../../Themetab';
import { GameLists, Providers, Languages } from '../../Cards/CategoryInfo';

function Navbar({toggle, isOpened, showPop, showSearch, currentLanguageNumber}) {
  const location = useLocation();
  const getActiveColor = (activeColor) => {
    if(location.pathname===activeColor){
      return '#da6431';
    }
  }
  return (
    <aside className={`sidebar ${isOpened ?  "opened" : ""}`}>
      <div onClick={toggle} className={`sidebar-toggler ${isOpened ? "opened" : ""}`}>
        <BiLeftArrow className='icon-menu-toggler' />
      </div>
      <div className="logo">
        <Link to='/'>
          <img src="images/logo/logo.png" alt="CryptoBet" />
        </Link>
      </div>
      <div className="sidebar__wrapper">
        <div className="sidebar__component">
          <div onClick={showSearch} className="search__wrapper btn-search" data-search="">
              <div className="search">
                  <div className="icon-search" id="btn-search">
                    <IoSearchOutline />
                  </div>
                  <span className="search__placeholder"> Search </span>
              </div>
          </div>
          <a href="#sidebar-games-categories" onClick={()=>{showPop(GameLists, "none", "block", "Game Categories")}} className="quick-link" data-link-games="">
            <img src="images/navIcons/slots.png" alt="slots" />
            {<span>Game categories</span>}
            <MdArrowRight className='icon-arrow-filled' />
          </a>
          <a href="#provider-menu" onClick={()=>{showPop(Providers, "none", "block", "Providers")}} className="quick-link" data-link-providers="">
            <img src="images/navIcons/provider.png" alt="providers" />
            <span>Providers</span>
            <MdArrowRight className='icon-arrow-filled' />
          </a>
          <ul className="header-menu">
            <li className='header-menu-item'>
              <Link className='header-menu-item-link' to='/games'><IoPlayOutline className='icon-games'  style={{color: getActiveColor('/games')}}/><span>Games</span></Link>
            </li>
            <li className='header-menu-item'>
              <Link className='header-menu-item-link' to ='/sportsbook'><MdOutlineSportsBaseball className='icon-sportsbook'  style={{color: getActiveColor('/sportsbook')}}/><span>Sportsbook</span></Link>
            </li>
            <li className='header-menu-item'>
              <Link className='header-menu-item-link' to='/bonuses'><MdOutlineMonetizationOn className='icon-bonuses'  style={{color: getActiveColor('/bonuses')}}/><span>Bonuses</span></Link>
            </li>
            <li className='header-menu-item'>
              <Link className='header-menu-item-link' to='/tournaments'><AiOutlineThunderbolt className='icon-tournaments'  style={{color: getActiveColor('/tournaments')}}/><span>Tournaments</span></Link>
            </li>
            <li className='header-menu-item'>
              <Link className='header-menu-item-link' to='/news'><MdOutlineChatBubbleOutline className='icon-news'  style={{color: getActiveColor('/news')}}/><span>News</span></Link>
            </li>
            <li className='header-menu-item'>
              <Link className='header-menu-item-link' to='/loyalty'><MdOutlineFavoriteBorder className='icon-loyalty'  style={{color: getActiveColor('/loyalty')}}/><span>Loyalty</span></Link>
            </li>
            <li className='header-menu-item'>
              <Link className='header-menu-item-link' to='/rules'><IoDocumentOutline className='icon-rules' style={{color: getActiveColor('/rules')}}/><span>Rules</span></Link>
            </li>
            <li className="header-menu-item">
              <Link className='header-menu-item-link' to='/FAQ'><BsQuestionCircle className='icon-faq' style={{color: getActiveColor('/FAQ')}}/><span>FAQ</span></Link>
            </li>
          </ul>
        </div>
        <div className="sidebar__component">
            <div className="telegram-block__wrapper">
                <a href="#!" className="telegram-block__title" rel="noreferrer" target="_blank">
                    <span>Telegram Casino</span>
                </a>
                <div className="telegram-block__description">
                    <p>Play your favourite games anywhere anytime</p>
                </div>
                <FaTelegramPlane className='icon-telegram' style={{color: "#fff"}} />
            </div>            
            <div className="sports-block__wrapper">
              <Link className="sports-block__title" to="/sportsbook" rel="nofollow"><span>Sports betting</span></Link>
              <div className="sports-block__description">
                <p>Try your luck and win generous prizes</p>
              </div>
              <MdSportsBaseball className='icon-sportsbook' style={{color: "#fff"}}/>
            </div>          
            <a onClick={()=>{showPop(Languages, "block", "none", "Languages")}} className="lang" href="#lang-menu" data-lang="">
                <span className="lang__current">
                    <img src={`${Languages[currentLanguageNumber].imgSrc}`} alt={`${Languages[currentLanguageNumber].imgAlt}`} />
                    <span className="lang__current-label">{Languages[currentLanguageNumber].language}</span>
                    <MdArrowRight className='icon-arrow-filled' />
                </span>
            </a>
            <Themetab />
        </div>
      </div>
    </aside>
  );
}

export default Navbar;
