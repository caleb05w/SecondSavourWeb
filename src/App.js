// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from './Pages/Home.js';
import About from './Pages/About.js'

//Components
import Navbar from './Components/Navbar.js'

function App() {
  return (
    <div className="App">
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
