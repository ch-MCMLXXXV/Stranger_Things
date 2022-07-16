import * as React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import {
   Login,
   Register,
   Userpage,
   Homepage,
   Inbox,
   Update,
   Create,
} from './components';

const App = () => {
   const [token, setToken] = useState('');
   console.log(token);
   useEffect(() => {
      const currToken = sessionStorage.getItem('token');
      setToken(currToken);
   }, []);
   return (
      <>
         <NavBar token={token} />

         <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
            <Route path='homepage' element={<Homepage token={token} />}></Route>
            <Route path='userpage' element={<Userpage token={token} />}></Route>
            <Route path='update' element={<Update token={token} />}></Route>
            <Route path='create' element={<Create token={token} />}></Route>
            <Route path='inbox' element={<Inbox token={token} />}></Route>
            <Route
               path='Login'
               element={<Login token={token} setToken={setToken} />}></Route>
            <Route path='register' element={<Register />}></Route>
         </Routes>
      </>
   );
};

export default App;
