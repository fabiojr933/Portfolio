import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Curriculo from './pages/curriculo';
import Projetos from './pages/projeto';
import Login from './pages/login';
import Register from './pages/register';

const routeDom = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={< Curriculo />} />   
            <Route path="/projetos" element={< Projetos />} />    
            <Route path="/login" element={< Login />} />     
            <Route path="/register" element={< Register />} /> 
        </Routes>
    </BrowserRouter>
    )
}

export default routeDom;