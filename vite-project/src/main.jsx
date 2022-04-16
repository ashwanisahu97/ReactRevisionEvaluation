import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import City from "./Components/City";
import Country from "./Components/Country";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App /> }></Route>
        <Route path="/add-country" element={<Country /> }></Route>
        <Route path="/add-city" element={<City /> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
