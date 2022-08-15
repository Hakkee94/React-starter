import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const CreatePostForm = () => {

    const [createPost, setCreatePost] = useState('')
    const navigate = useNavigate()

    const handleCreatePost = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": 0,
            "content": createPost
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:7777/posts", requestOptions)
            .then(response => response.text())
            .then(() => navigate('/'))
            .catch(error => console.log('error', error));
    }

    return (
        <div className='new-post'>
            <div style={{display: 'flex', alignSelf: 'end'}}>
                <NavLink to='/' >x</NavLink>
            </div>

            <div>
                <textarea onChange={(event) => setCreatePost(event.target.value)}/>
            </div>

            <div>
                <button className='publish-btn' onClick={handleCreatePost}>Опубликовать</button>
            </div>

        </div>
    );
};

export default CreatePostForm;