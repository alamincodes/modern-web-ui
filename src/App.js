import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown}/>
      <HeroSection isMenuShown={isMenuShown}/>  
    </div>
  );
}

export default App;
