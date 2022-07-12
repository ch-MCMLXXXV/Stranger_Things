// import React, { useEffect, useState } from 'react';
// import { APIURL } from './index';

// export const cohortName = '2204-FTB-ET-WEB-PT';
// export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

// export default function Homepage() {
//    const [posts, setPosts] = useState([]);

//    useEffect(() => {
//       const fetchAllPosts = async () => {
//          const response = await fetch(`${APIURL}/posts`);
//          const result = await response.json();
//          setPosts(result.data.posts);
//       };
//       fetchAllPosts();
//    }, []);

//    return (
//       <>
//          <div>
//             <header>
//                <h1 className=''>Stranger's Things</h1>
//             </header>
//          </div>
//          <h1>Posts</h1>

//          {posts.map((post) => (
//             <div key={post._id}>
//                <h3>{post.title}</h3>
//                <div>{post.description}</div>
//                <div>{post.location}</div>
//                <div>{post.price}</div>
//                <div>{post.willDeliver}</div>
//             </div>
//          ))}
//       </>
//    );
// }
