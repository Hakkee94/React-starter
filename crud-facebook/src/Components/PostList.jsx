import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:7777/posts", requestOptions)
            .then(response => response.json())
            .then(result => setPosts(result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div>
            {posts.map((item, key) => {
                return <PostItem content={item.content} id={item.id}/>
            })}
        </div>
    );
};

export default PostList;