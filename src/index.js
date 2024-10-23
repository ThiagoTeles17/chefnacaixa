import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header/Header';
import { Receitas } from './pages/Receitas/Receitas';
import { Footer } from './components/Footer/Footer';
import { Layout } from './components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <div style={{display: "flex", flexDirection: "column"}}>
        <Header/>
        <Layout/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/receitas' Component={Receitas}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
);
