import { useState } from "react";
import "./App.css";
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
    </div>
  );
}

export default App;
