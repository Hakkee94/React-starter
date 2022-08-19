import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";
import {fetchPostsThunk} from "../redux/postSlice";
import {useDispatch, useSelector} from "react-redux";

const PostList = () => {

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(fetchPostsThunk())
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