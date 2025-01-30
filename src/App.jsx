import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Login from './pages/Login';
import Book from './pages/Book';
import BookDetail from './pages/BookDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute'

import './App.css'

function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <h1>Welcome to our home page</h1>

    </div>
  )
}
export default App
