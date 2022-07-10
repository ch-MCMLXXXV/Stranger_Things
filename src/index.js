import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Create, Update } from './components';

export const cohortName = '2204-FTB-ET-WEB-PT';
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        const fetchAllPosts = async () => {
            const response = await fetch(`${APIURL}/posts`);
            const result = await response.json();
            setPosts(result.data.posts);
        };
        fetchAllPosts();
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
            const newPosts = posts.filter(
                (post) => post._id !== postIdToDelete
            );
            setPosts(newPosts);
        }
    };
    return (
        <>
            <div>
                <header>
                    <h1 className="">Stranger Things</h1>
                </header>
            </div>
            <h1>Posts</h1>
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
                    <button type="button" onClick={() => setPostId(post._id)}>
                        Edit
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDelete(post._id)}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
