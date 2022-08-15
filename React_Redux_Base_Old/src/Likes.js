import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./redux/likeReducer";

const Likes = () => {
    const dispatch = useDispatch()
    const likes = useSelector(state => state.likes.values)
    console.log(likes)
    return (
        <div className='button-controls'>
            <button onClick={() => dispatch(increment(1))}>❤ {likes}</button>
            <button onClick={() => dispatch(decrement(1))}>Dislike</button>
        </div>
    );
};


export default Likes;