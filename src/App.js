import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import EditTode from './Components/Todo/EditTode';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList';

function App() {

  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="edit/:id" element={<EditTode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
