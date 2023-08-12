
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './CurdApp/Home'


class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}></Route>

     </Routes>
     </BrowserRouter>
    );
  }
}

export default App;