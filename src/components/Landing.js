import * as React from 'react';
import { useEffect, useState } from 'react';
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

const Landing = () => {
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
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
               <Toolbar>
                  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                     Stranger's Things
                  </Typography>
                  <Button href='/Login' color='inherit'>
                     Login
                  </Button>
                  <Button href='/Register' color='inherit'>
                     Register
                  </Button>
               </Toolbar>
            </AppBar>
         </Box>
         <div>
            <h1>Board</h1>

            {/* <Stack
               direction='row'
               divider={<Divider orientation='vertical' flexItem />}
               spacing={2}>
               <Button href='/Login' variant='contained'>
                  Login
               </Button>
               <Button href='/Register' variant='contained'>
                  Register
               </Button>
            </Stack> */}
            <Outlet />
         </div>
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
                  </Card>
               </Grid>
            ))}
         </Grid>
      </>
   );
};

export default Landing;
