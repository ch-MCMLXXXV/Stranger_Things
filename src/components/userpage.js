import * as React from 'react';
import { useState, useEffect } from 'react';
import { APIURL } from '../index';
import { IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Userpage = ({ token, username, postId, setPostId }) => {
   const [posts, setPosts] = useState([]);
   console.log(token);

   useEffect(() => {
      const fetchUserPosts = async () => {
         const response = await fetch(`${APIURL}/users/me`, {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
         });
         const result = await response.json();
         console.log(result);
         if (result) {
            const activePost = result.data.posts.filter(
               (post) => post.active === true
            );
            setPosts(activePost);
         }
      };
      fetchUserPosts();
   }, [token]);

   const handleDelete = async (postId) => {
      const response = await fetch(`${APIURL}/post/${postId}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      });
      const result = await response.json();
      console.log(result);
      if (result) {
         const newPosts = posts.filter((post) => post._id !== postId);
         setPosts(newPosts);
      }
   };

   return (
      <>
         <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {posts.map((post) => (
               <Grid item xs={12} md={6} sm={4}>
                  <Card
                     variant='outlined'
                     sx={{
                        display: 'flex',
                        backgroundColor: 'aliceblue',
                        boxShadow: '5px 5px grey',
                     }}>
                     <CardContent sx={{ flex: 1 }} key={post._id}>
                        <Typography component='h2' variant='h5'>
                           {' '}
                           {post.title}
                        </Typography>
                        <Typography variant='subtitle1'>
                           {post.description}
                        </Typography>
                        <Typography variant='subtitle2'>
                           {post.location}
                        </Typography>
                        <Typography variant='subtitle2'>
                           {post.price}
                        </Typography>
                        <Typography variant='subtitle2'>
                           {post.willDeliver}
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <IconButton
                           aria-label='edit'
                           size='small'
                           href='/Update'>
                           <EditIcon />
                        </IconButton>
                        <IconButton
                           aria-label='delete'
                           size='small'
                           onClick={() => handleDelete(post._id)}>
                           <DeleteIcon />
                        </IconButton>
                     </CardActions>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </>
   );
};

export default Userpage;
