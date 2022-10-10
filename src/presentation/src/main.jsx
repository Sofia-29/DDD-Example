import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './home/Home';
import { CreateEmployee } from './employees/CreateEmployee';
import { GetEmployees } from './employees/GetEmployees';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './core/header'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element = { <Home/> } />
            <Route path="/createEmployee" element = { <CreateEmployee />} />
            <Route path="/getEmployees" element = { <GetEmployees /> } />
        </Routes>
        </Router>
    </React.StrictMode>
)