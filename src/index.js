import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Links from './Links/About'
import Contact from './Links/Contact'
import About from './Links/About'
import Services from './Links/Service'
import Privacy from './Links/Privacy'
ReactDOM.render(
  <React.StrictMode>
<BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} >
     
      </Route>
     
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Services/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
     </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
