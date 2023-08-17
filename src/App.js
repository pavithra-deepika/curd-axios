
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './CurdApp/Home'
import Create from './CurdApp/Create';
import Update from './CurdApp/Update'


class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>



     </Routes>
     </BrowserRouter>
    );
  }
}

export default App;