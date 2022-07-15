import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Login, Register, Landing, Homepage, Userpage } from './components';
// import Userpage from './components/Userpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const cohortName = '2204-FTB-ET-WEB-PT';
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Root = () => {
   const [token, setToken] = useState('');
   console.log(token);
   useEffect(() => {
      const currToken = sessionStorage.getItem('token');
      setToken(currToken);
   }, []);
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route
               path='/Userpage'
               element={<Userpage token={token} />}></Route>
            <Route path='/Homepage' element={<Homepage />}></Route>
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
