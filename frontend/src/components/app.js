import React from "react";
import "../styles/app.css";
import CategoriesLinks from "./categories";
import Dishes from "./dishes"
import Dish from "./dish"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 


function App() {
    return (
    <BrowserRouter>
        <CategoriesLinks />
        <Routes>
            <Route path="/dishes" element={<Dishes/>} />
            <Route path="/" element={ <Navigate to="/dishes" /> }/>
            <Route path="/dishes/:dishid" element={<Dish/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;