import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Login, Register } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const cohortName = '2204-FTB-ET-WEB-PT';
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<App />}>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
         </Route>
      </Routes>
   </BrowserRouter>
);
