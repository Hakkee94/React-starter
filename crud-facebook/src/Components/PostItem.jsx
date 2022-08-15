import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";


const PostItem = ({content, id}) => {
    var now = new Date().toLocaleTimeString().slice(0, -3);
    const params = useParams()
    console.log(params)
    const navigate = useNavigate()


    const [text, setText] = useState(content)
    const [isEdit, setIsEdit] = useState(false)
    const [postList, setPostList] = useState([])

    const handleChangePost = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": params.id,
            "content": text
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch("http://localhost:7777/posts", requestOptions)
            await response.text()
            navigate('/')
        } catch (er) {
            console.log(er)
        }
    }

    const handleDeletePost = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
        };
        try {
            await fetch("http://localhost:7777/posts/" + params.id, requestOptions)
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if (!text && params.id) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://localhost:7777/posts/" + params.id, requestOptions)
                .then(response => response.json())
                .then(result => setText(result.content))
                .catch(error => console.log('error', error));
        }
    }, [])


    return (
        <div className='post-item'>
            <div className='avatar'>

                <div>
                    <img width='40px' style={{paddingRight: '10px'}}
                         src='https://cdn4.vectorstock.com/i/thumb-large/84/38/profile-icon-male-head-in-chat-bubble-isolated-vector-23798438.jpg'/>
                </div>

                <div className='writer-info'>
                    <span>Давид</span>
                    <div>
                        <span>Основатель группы</span>
                        <span style={{paddingLeft: '5px'}}>{now}</span>
                    </div>
                </div>
            </div>

            <div className='post-content'>
                <h3>{text}</h3>
            </div>

            <div className='feedback'>
                <img className='like'
                     src='data:image/png;base64,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'
                     width='40px'>

                </img>

                <button className='comment'>
                    Комментировать
                </button>
            </div>

            {
                isEdit && <div className='comment-form'>
                    <div>
                        <img width='40px' style={{paddingRight: '10px'}}
                             src='https://cdn4.vectorstock.com/i/thumb-large/84/38/profile-icon-male-head-in-chat-bubble-isolated-vector-23798438.jpg'/>
                    </div>

                    <div>
                        <input onChange={event => setText(event.target.value)} defaultValue={text}
                               style={{height: '40px', borderRadius: '15px', border: '1px', paddingLeft: '10px'}}/>
                    </div>
                </div>}

            {
                params.id && <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                    <div>
                        {
                            !isEdit ? <button onClick={event => setIsEdit(!isEdit)}>Изменить</button> :
                                <button onClick={handleChangePost}>Сохранить</button>
                        }
                    </div>

                    <div style={{paddingLeft: '10px'}}>
                        <button onClick={handleDeletePost}>Удалить</button>
                    </div>

                </div>
            }

            <div className='link-to-post'>
                <NavLink to={"/posts/" + id}>Просмотр поста</NavLink>
            </div>

        </div>
    );
};

export default PostItem;