import { useState, useEffect } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const cohortName = '2204-FTB-ET-WEB-PT';
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
