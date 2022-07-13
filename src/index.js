import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Login, Register, Landing } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const cohortName = '2204-FTB-ET-WEB-PT';
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Root = () => {
   const [token, setToken] = useState('');
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route
               path='login'
               element={<Login token={token} setToken={setToken} />}></Route>
            <Route
               path='*'
               element={
                  <main>
                     <p>There's nothing here!</p>
                  </main>
               }></Route>
         </Routes>
      </BrowserRouter>
   );
};
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Root />);
