import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SocialLinks from "./Components/SocialLinks";
import Portfolios from "./Portfolios";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <SocialLinks/>
      <Portfolios/>   
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
