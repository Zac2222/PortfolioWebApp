import './CSS/App.css'
import AboutMe from './components/AboutMe';
import Background from './components/Background'
import Landing from './components/Landing';
import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <Background/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* <Background /> */}
      
    </BrowserRouter>
  )
}

export default App

