import {  Fragment, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import s from "./App.module.css";
// import violetGradient from "./assets/violetGradient.png";
// import yellowGradient from "./assets/yellowGradient.png";
// import violetGradientTwo from "./assets/violetGradientTwo.png";

import ContactsButton from "./components/ContactsButton";
import ScrollButton from "./components/ScrollButton/ScrollButton";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./views/Main/Main";
import SMM from "./views/SMM/SMM";
import UIUX from "./views/UIUX/UIUX";
import Target from "./views/Target/Target";
import GoogleAds from "./views/GoogleAds/GoogleAds";
import Marketing from "./views/Marketing/Marketing";
import AboutUs from "./views/AboutUs";
// import NonFound from "./views/NonFound";

import Form from "./components/Form/Form";
import Contacts from "./views/Contacts/Contacts";
import WebDev from "./views/WebDev/WebDev";
import Portfolio from "./views/Portfolio";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [isContacts, setIsContacts] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/contacts") {
      setIsContacts(true);
    } else {
      setIsContacts(false);
    }
  }, [pathname]);

  return (
    <Fragment>
      {/* <img src={violetGradient} alt="none" className={s.violetGradient} />
      <img src={violetGradientTwo} alt="none" className={s.violetGradientTwo} />
      <img src={yellowGradient} alt="none" className={s.yellowGradient} />
      <img src={yellowGradient} alt="none" className={s.yellowGradientTwo} /> */}
      <Header />

      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/smm" Component={SMM} />
        <Route path="/uiux" Component={UIUX} />
        <Route path="/target" Component={Target} />
        <Route path="/google-ads" Component={GoogleAds} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/marketing" Component={Marketing} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/webdev" Component={WebDev} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="*" Component={Main} />
      </Routes>
      {isContacts ? null : <Form />}
      <Footer />
      <ContactsButton />
      <ScrollButton />
    </Fragment>
  );
}

export default App;
