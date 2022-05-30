import React , {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages';
import Games from '../../pages/Games';
import Sportsbook from '../../pages/Sportsbook';
import Bonuses from '../../pages/Bonuses';
import Tournaments from '../../pages/Tournaments';
import News from '../../pages/News';
import Loyalty from '../../pages/Loyalty';
import Rules from '../../pages/Rules';
import FAQ from '../../pages/FAQ';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Header from './Header';
import Navbar from './Navbar';
import MobileBar from './Mobilebar';
import Popup from './Popup';
import SearchModal from './SearchModal';
import Footer from '../Footer';
function Navigations({toggle, isOpened}){
  const [isShowed, setShowed] = useState (false);
  const [categoryLists, setCategoryLists] = useState([]);
  const [displayLang, setDisPlayLang] = useState("block");
  const [displayCategory, setDisPlayCategory] = useState("block");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [currentLanguageNumber, setCurrentLanguageNumber] = useState(3);
  useEffect(()=>{
    if(localStorage.languageIndex !== undefined){
      setCurrentLanguageNumber(localStorage.languageIndex);
    }
  },[])
  const showPop = (categoryLists, displayL, displayC, categoryTitle) => {
    setShowed(!isShowed);
    if(!isShowed){
      setCategoryLists(categoryLists);
      setDisPlayLang(displayL);
      setDisPlayCategory(displayC);
      setCategoryTitle(categoryTitle);
    }
  }
  const [isSearchActive, setSearchActive] = useState (false);
  const showSearch = () => {
    setSearchActive(!isSearchActive);
  }
  const currentLanguage = (current) => {
    setCurrentLanguageNumber(current);
  }
  return (
    <>
      <BrowserRouter>
        <Popup showPop={showPop} isShowed={isShowed} setShowed={setShowed} categoryLists={categoryLists} displayLang={displayLang} displayCategory={displayCategory} categoryTitle={categoryTitle} currentLanguage={currentLanguage} />
        <Header />
        <Navbar toggle = {toggle} isOpened = {isOpened} showPop={showPop} isShowed={isShowed} setShowed={setShowed} showSearch={showSearch} currentLanguageNumber={currentLanguageNumber} />
        <MobileBar />
        <Routes>
          <Route path='/' exact element = {<Home />}/>
          <Route path='/games' exact element = {<Games />}/>
          <Route path='/sportsbook' exact element = {<Sportsbook />}/>
          <Route path='/bonuses' exact element = {<Bonuses />}/>
          <Route path='/tournaments' exact element = {<Tournaments />}/>
          <Route path='/news' exact element = {<News />}/>
          <Route path='/loyalty' exact element = {<Loyalty />}/>
          <Route path='/rules' exact element = {<Rules />}/>
          <Route path='/FAQ' exact element = {<FAQ />}/>
          <Route path='/registration' exact element = {<Registration />}/>
          <Route path='/login' exact element = {<Login />}/>
        </Routes>
        <SearchModal isSearchActive={isSearchActive} showSearch={showSearch} />
        <Footer showPop={showPop} />
      </BrowserRouter>
    </>
  )
}

export default Navigations;