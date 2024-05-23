import React from "react";
import App from "./components/app";
import { createRoot } from 'react-dom/client';
import "./index.css"


const root = createRoot(document.getElementById('root'))
root.render(<App/>);

