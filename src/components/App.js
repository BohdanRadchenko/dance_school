import React from 'react';
import Header from "./Header/Header";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Bunner from "./Bunner/Bunner";
import About from "./About/About";
import DanceList from "./DanceList/DanceList";
import Teachers from "./Teachers/Teachers";
import Timetable from "./Timetable/Timetable";
import Price from "./Price/Price";
import Contest from "./Contest/Contest";
import Faq from "./Faq/Faq";
import Feedback from "./Feedback/Feedback";
import Contact from "./Contact/Contact";
import Widget from "./Widget/Widget";
import Footer from "./Footer/Footer";
import Copy from "./Copy/Copy";

function App() {
  return (
    <>
      <Header/>
      <BurgerMenu />
      <Bunner/>
      <About/>
      <DanceList/>
      <Teachers/>
      <Timetable/>
      <Price/>
      <Contest/>
      <Faq/>
      <Feedback/>
      <Contact/>
      <Widget/>
      <Footer/>
      <Copy/>
    </>
  );
}

export default App;
