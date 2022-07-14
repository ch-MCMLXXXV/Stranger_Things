import * as React from 'react';
import { useEffect, useState } from 'react';
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
         <div>
            <header>
               <h1 className=''>Stranger's Things</h1>
            </header>
         </div>
         <div>
            <h1>Posts</h1>
            <nav>
               <Button href='/Register' variant='contained'>
                  Register
               </Button>
               <Button href='/Login' variant='contained'>
                  Login
               </Button>
            </nav>
            <Outlet />
         </div>
         {posts.map((post) => (
            <div key={post._id}>
               <h3>{post.title}</h3>
               <div>{post.description}</div>
               <div>{post.location}</div>
               <div>{post.price}</div>
               <div>{post.willDeliver}</div>
            </div>
         ))}
      </>
   );
};

export default Landing;
