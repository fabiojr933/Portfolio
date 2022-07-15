import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Curriculo from './pages/curriculo';

const routeDom = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={< Curriculo />} />           
        </Routes>
    </BrowserRouter>
    )
}

export default routeDom;