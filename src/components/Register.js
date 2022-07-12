import React, { useState } from 'react';
import { APIURL } from '../index';

export default function Register() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`${APIURL}/users/register`, {
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

   const onConfirmPassword = () => {
      if (password === true && confirmPassword === true) {
         if (password !== confirmPassword) {
            console.log('The passwords do not match');
            return;
         } else {
            console.log('Ok');
         }
      }
   };

   return (
      <>
         <h2>Create an Account</h2>
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
            <input
               type='password'
               placeholder='Confirm password'
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               onBlur={onConfirmPassword}></input>
            <button type='submit'>Register</button>
         </form>
      </>
   );
}
