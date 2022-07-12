import React, { useEffect, useState } from 'react';
import { APIURL } from './index';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
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
               <Link to='/components/Register'>Register</Link> | {''}
               <Link to='/components/Login'>Login</Link>
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
}
