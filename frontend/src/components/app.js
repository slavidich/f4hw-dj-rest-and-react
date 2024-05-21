import React from "react";
import "../styles/app.css";
import CategoriesLinks from "./categories";
import Dishes from "./dishes"
import { BrowserRouter } from "react-router-dom"; 


function App() {
    return (
    <BrowserRouter>
        <CategoriesLinks />
        <Dishes/>
    </BrowserRouter>
    );
}

export default App;