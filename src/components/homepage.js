import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { APIURL } from '../index';
import { CardActions, IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';

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
                     <CardContent sx={{ flex: 1 }} key={post._id}>
                        <Typography component='h2' variant='h5'>
                           {post.title}
                        </Typography>
                        <Typography variant='subtitle1'>
                           {post.description}
                        </Typography>
                        <Typography variant='subtitle2'>
                           {post.location},{post.price},{post.willDeliver}
                        </Typography>
                     </CardContent>
                     <CardActions>
                        {token ? (
                           <IconButton
                              aria-label='message'
                              size='small'
                              href='/Message'>
                              <MessageIcon />
                           </IconButton>
                        ) : null}
                     </CardActions>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </>
   );
};

export default Homepage;
