import React from 'react';
import {NavLink} from "react-router-dom";

const LinkToCreateForm = () => {
    return (
        <div className='create-post-form'>
            <NavLink to="/posts/new" className='create-post'>
                Создать пост
            </NavLink>
        </div>
    );
};

export default LinkToCreateForm;