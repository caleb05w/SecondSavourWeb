// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Footer from './Components/Footer.js'
import Navbar from './Components/Navbar.js'


import AnimatedRoutes from "./Components/AnimatedRoutes.js";

function App() {
  return (
    <div className="App">
     {/* <link rel="stylesheet" href="//input.css"></link> */}
    <Router>
      <Navbar />
        <AnimatedRoutes />
        <Footer />
    </Router>
    </div>
  );
}

export default App;


