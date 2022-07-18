import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIURL } from '../index';
import { TextField, CssBaseline, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Create = ({ posts, setPosts, token }) => {
   const history = useNavigate;
   const [title, setTitle] = useState([]);
   const [description, setDescription] = useState([]);
   const [price, setPrice] = useState('');
   console.log(token);
   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(`Bearer ${token}`);
      const response = await fetch(`${APIURL}/posts`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({
            post: {
               title,
               description,
               price,
            },
         }),
      });
      const result = await response.json();
      console.log(result);
      setPosts([result, ...posts]);
      history('/Userpage');
   };

   return (
      <>
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
                  Create A Post
               </Typography>
               <Box component='form' onSubmit={handleSubmit}>
                  <TextField
                     margin='normal'
                     fullWidth
                     id='outlined'
                     label='Title'
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}></TextField>
                  <TextField
                     margin='normal'
                     fullWidth
                     id='outlined'
                     label='Description'
                     value={description}
                     onChange={(e) =>
                        setDescription(e.target.value)
                     }></TextField>
                  <TextField
                     margin='normal'
                     fullWidth
                     id='outlined'
                     label='Price'
                     type='currency'
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}></TextField>
                  <Button
                     type='submit'
                     margin='normal'
                     aria-label='Post'
                     id='outlined'
                     variant='outlined'>
                     Post
                  </Button>
               </Box>
            </Box>
         </Container>
      </>
   );
};

export default Create;
