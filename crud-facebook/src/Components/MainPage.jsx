import React from 'react';
import LinkToCreateForm from "./LinkToCreateForm";
import PostList from "./PostList";

const MainPage = () => {
    return (
        <div className='facebook-app'>
            <LinkToCreateForm/>
            <PostList/>
        </div>
    );
};

export default MainPage;