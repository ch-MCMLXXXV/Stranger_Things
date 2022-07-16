import * as React from 'react';
import { useEffect, useState } from 'react';
import Inbox from './Inbox';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { APIURL } from '../index';
import { Link, Outlet } from 'react-router-dom';
import { CardActionArea, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Homepage = ({ token }) => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      const fetchAllPosts = async () => {
         const response = await fetch(`${APIURL}/posts`);
         const result = await response.json();
         setPosts(result.data.posts);
      };
      fetchAllPosts();
   }, []);

   return (
      <>
         <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {posts.map((post) => (
               <Grid key={post._id} item xs={12} md={6} sm={4}>
                  <Card
                     variant='outlined'
                     sx={{
                        display: 'flex',
                        backgroundColor: 'aliceblue',
                        boxShadow: '5px 5px grey',
                     }}>
                     <CardContent sx={{ flex: 1 }}>
                        <Typography component='h2' variant='h5'>
                           {' '}
                           {post.title}
                        </Typography>
                        <Typography variant='subtitle1'>
                           {post.description}
                        </Typography>
                        <Typography variant='subtitle2'>
                           {post.location},{post.price},{post.willDeliver}
                        </Typography>
                     </CardContent>
                     <CardActions>{token ? <Inbox /> : null}</CardActions>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </>
   );
};

export default Homepage;
