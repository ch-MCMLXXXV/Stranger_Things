import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { APIURL } from '../index';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { CssBaseline, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Register() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [token, setToken] = useState('');
   const history = useNavigate();

   const handleRegister = async (username, password) => {
      try {
         const response = await fetch(`${APIURL}/users/register`, {
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
         });
         const result = await response.json();
         console.log(result);
         return result;
      } catch (error) {
         console.log(error);
      }
   };

   const HandleSubmit = async (e) => {
      e.preventDefault();
      console.log(username);
      const result = await handleRegister(username, password);
      console.log('result', result);
      const token = result.data.token;
      console.log('token', token);
      console.log('setToken', setToken);
      sessionStorage.setItem('token', token);
      setToken(token);
      history('/Homepage');
   };

   const onSubmit = () => {
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
      <Container component='main' maxWidth='xs'>
         <CssBaseline />
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}>
            <Typography component='h1' variant='h4'>
               Create Account
            </Typography>
            <Box component='form' onSubmit={HandleSubmit}>
               <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='outlined-required'
                  label='Enter Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}></TextField>
               <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='outlined-required'
                  label='Password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}></TextField>
               <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='outlined-required'
                  label='Confirm Password'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={onSubmit}></TextField>
               <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}>
                  Register
               </Button>
            </Box>
         </Box>
      </Container>
   );
}
