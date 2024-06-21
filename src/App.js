import './App.css';
import Header from './components/header/Header'
import Section1 from './components/main/Section1/Section1';
import Section2 from './components/main/Section2/Section2';
import Section3 from './components/main/Section3/Section3';
import Section4 from './components/main/Section4/Section4';
import Section5 from './components/main/Section5/Section5';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}

export default App;
