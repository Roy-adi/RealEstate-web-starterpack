import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import './App.css';
import Companies from "./Components/Companies/Companies";
import Recidencies from "./Components/Residencies/Recidencies";
import Value from "./Components/value/Value";
import Contact from "./contact/Contact";
import GetStarted from "./Components/getStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Recidencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
