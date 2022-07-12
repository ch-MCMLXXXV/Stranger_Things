import React, { useEffect, useState } from 'react';
import { APIURL } from '../index';

export default function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   useEffect(() => {
      const userLogin = async () => {
         const response = await fetch(`${APIURL}/users/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               user: {
                  username: '',
                  password: '',
               },
            }),
         });
         const result = await response.json();
         return result;
      };
      userLogin();
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();
   };

   return (
      <div>
         <h2>Login</h2>
         <form onsubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Enter username'
               value={username}
               onChange={(e) => setUsername(e.target.value)}></input>
            <input
               type='password'
               placeholder='Enter password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit'>Login</button>
         </form>
      </div>
   );
}
