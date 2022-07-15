import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostEdit = () => {

    return [
        <textarea/>,
        <button>Сохранить</button>
    ]
}

const PostView = () => {
    const [isEdit, setIsEdit] = useState(false)

    return (
        <div>
            {isEdit ? <PostEdit/> : <PostItem/>}
            <div>
                <button onClick={() => setIsEdit(!isEdit)}>Изменить</button>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostView;