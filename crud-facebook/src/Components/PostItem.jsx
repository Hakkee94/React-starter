import React from 'react';
import {NavLink} from "react-router-dom";

const PostItem = ({content, id}) => {
    return (
        <div>
            <div className='avatar'>
                {/*<img src={avatar}/>*/}
            </div>

            <div className=''>
                <span>name</span>
                <div>
                    <span>position</span>
                    <span>time</span>
                </div>
            </div>

            <div className='post-content'>
                <h3>{content}</h3>
            </div>

            <div className='feedback'>
                <div className='like'>

                </div>

                <div className='comment'>

                </div>
            </div>

            <div>
                <NavLink to={"/posts/" + id}>Просмотр поста</NavLink>
            </div>

        </div>
    );
};

export default PostItem;