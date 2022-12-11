import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Customers from "./components/Customers";
import DevApi from "./components/DevApi";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown}/>
      <HeroSection isMenuShown={isMenuShown}/>  
      <Products/>
      <DevApi/>
      <Customers/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
