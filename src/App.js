import {Header, AboutMe, Skills, Contact, CV } from './components/Nav'
import './App.css';
import SimpleSlider from './components/Carus';

function App() {
  return (
    <div className="App">
       <div>
            <Header />
            <AboutMe />
            <Skills />
            <CV />
            <SimpleSlider />
            {/* <Team /> */}
            <Contact />
            
        </div>
    
    </div>
  );
}

export default App;
