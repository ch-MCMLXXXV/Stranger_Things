import * as React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import {
   Login,
   Register,
   Userpage,
   Homepage,
   Inbox,
   Update,
   Create,
   Logout,
   Search,
   Message,
} from './components';

const App = ({ posts, setPosts, postId, setPostsID, setpostShown }) => {
   const [token, setToken] = useState('');
   console.log(token);
   useEffect(() => {
      const currToken = sessionStorage.getItem('token');
      setToken(currToken);
   }, []);
   return (
      <>
         <NavBar token={token} posts={posts} setpostShown={setpostShown} />

         <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
            <Route path='homepage' element={<Homepage token={token} />}></Route>
            <Route path='userpage' element={<Userpage token={token} />}></Route>
            <Route
               path='update'
               element={
                  <Update
                     token={token}
                     posts={posts}
                     setPosts={setPosts}
                     postId={postId}
                     setPostsID={setPostsID}
                  />
               }></Route>
            <Route
               path='create'
               element={
                  <Create token={token} posts={posts} setPosts={setPosts} />
               }></Route>
            <Route path='inbox' element={<Inbox token={token} />}></Route>
            <Route
               path='Login'
               element={<Login token={token} setToken={setToken} />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route
               path='logout'
               element={<Logout token={token} setToken={setToken} />}></Route>
            <Route
               path='message'
               element={<Message token={token} postId={postId} />}></Route>
         </Routes>
      </>
   );
};

export default App;
