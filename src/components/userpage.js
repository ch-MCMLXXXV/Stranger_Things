import React, { useEffect, useState } from 'react';
import { APIURL } from './index';
import { Create, Update } from './components';

const UserPage = ({ token }) => {
   const [userposts, setUserPosts] = useState([]);
   const [posts, setPosts] = useState([]);
   const [postId, setPostId] = useState(null);

   useEffect(() => {
      const fetchUserPosts = async () => {
         const response = await fetch(`${APIURL}/users/me`, {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
         });
         const result = await response.json();
         setUserPosts(result.data.posts);
      };
      fetchUserPosts();
   }, []);

   const handleDelete = async (postIdToDelete) => {
      const response = await fetch(`${APIURL}/posts/${postIdToDelete}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const result = await response.json();
      if (result) {
         const newPosts = posts.filter((post) => post._id !== postIdToDelete);
         setPosts(newPosts);
      }
   };

   return (
      <>
         <div>
            <header>
               <h1>Profile</h1>
            </header>
         </div>
         <h1>My Posts</h1>
         {postId ? (
            <Update
               posts={posts}
               setPosts={setPosts}
               postId={postId}
               setPostId={setPostId}
            />
         ) : (
            <Create posts={posts} setPosts={setPosts} />
         )}

         {posts.map((post) => (
            <div key={post._id}>
               <h3>{post.title}</h3>
               <div>{post.description}</div>
               <div>{post.location}</div>
               <div>{post.price}</div>
               <div>{post.willDeliver}</div>
               <button type='button' onClick={() => setPostId(post._id)}>
                  Edit
               </button>
               <button type='button' onClick={() => handleDelete(post._id)}>
                  Delete
               </button>
            </div>
         ))}
      </>
   );
};

export default UserPage;
