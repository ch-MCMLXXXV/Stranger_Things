import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { TextField, Typography, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { APIURL } from '../index';
import { useNavigate } from 'react-router-dom';

const Update = ({ posts, setPosts, postId, setPostId, token }) => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [price, setPrice] = useState('');
   const history = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`${APIURL}/posts/${postId}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer${token}`,
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
      if (result && result.title) {
         const newPosts = posts.map((post) => {
            if (post._id === postId) {
               return result;
            } else {
               return post;
            }
         });
         setPosts(newPosts);
         setTitle('');
         setDescription('');
         setPrice('');
         setPostId(null);
         history('/Userpage');
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
               Update Post
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
                  onChange={(e) => setDescription(e.target.value)}></TextField>
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
                  aria-label='edit'
                  variant='outlined'
                  startIcon={<EditIcon />}
                  onClick={() => setPostId}>
                  Edit
               </Button>
            </Box>
         </Box>
      </Container>
   );
};

export default Update;
