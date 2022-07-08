import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const cohortName = '2204-FTB-ET-WEB-PT';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const App = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
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
                    <h1 className="">Stranger Things</h1>
                </header>
            </div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <div>{post.description}</div>
                </div>
            ))}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
