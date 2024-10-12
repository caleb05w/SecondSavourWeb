// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";


//pages
import Home from '../Pages/Home.js'
import About from '../Pages/About.js'
import Blog from '../Pages/Blog.js'
import BlogPage from '../Pages/BlogPage.js'


//Componnets
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar.js";
import Shop from '../Pages/Shop.js'



function AnimatedRoutes() {

const location = useLocation();
  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Blog />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blogPage' element={<BlogPage />} />
        <Route exact path='/shop' element={<Shop />} />


        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
