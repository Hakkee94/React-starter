import React from 'react';
import LinkToCreateForm from "./LinkToCreateForm";
import PostList from "./PostList";

const MainPage = () => {
    return (
        <div>
            <LinkToCreateForm/>
            <PostList/>
        </div>
    );
};

export default MainPage;