import React, { useState } from 'react';
import { APIURL } from '../index';

const Create = ({ posts, setPosts, token }) => {
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
   };

   return (
      <>
         <h3>Create a Post</h3>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='title'
               value={title}
               onChange={(e) => setTitle(e.target.value)}></input>
            <input
               type='text'
               placeholder='description'
               value={description}
               onChange={(e) => setDescription(e.target.value)}></input>
            <input
               type='currency'
               placeholder='price'
               value={price}
               onChange={(e) => setPrice(e.target.value)}></input>
            <button type='submit'>Submit</button>
         </form>
      </>
   );
};

export default Create;
