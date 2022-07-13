import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIURL } from '../index';

async function userLogin(username, password) {
   console.log(username, password);
   return fetch(`${APIURL}/users/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         user: {
            username: username,
            password: password,
         },
      }),
   })
      .then((response) => response.json())
      .then((result) => {
         console.log(result);
         return result.data.token;
      })
      .catch(console.error);
}

function Login({ setToken }) {
   const history = useNavigate;
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const handleSubmit = async (e) => {
      e.preventDefault();
      const token = await userLogin(username, password);
      sessionStorage.setItem('token', JSON.stringify(token));
      setToken(token);
      history('/Homepage');
   };

   return (
      <>
         <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
      </>
   );
}

export default Login;
