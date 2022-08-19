import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";
import {getPosts} from "../redux/postSlice";
import {useDispatch, useSelector} from "react-redux";

const PostList = () => {

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    console.log(posts)

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
            .then(result => dispatch(getPosts(result)))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div>
            {posts.map((item, key) => {
                return <PostItem key={item.id} content={item.content} id={item.id}/>
            })}
        </div>
    );
};

export default PostList;