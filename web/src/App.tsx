import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NewPage from './pages/NewPage';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


function App() {

  const theme = {
    primary: '#322153',
    secondary: '#6c63ff',
    background: '#f0f0f5',
    text: '#6c6c80',
    white: '#fafafa'
  };

  return (
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={ <HomePage/> }></Route>

          <Route path='/new' element={ <NewPage/> }></Route>

        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;
