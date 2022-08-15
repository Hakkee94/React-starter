import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addItem, removeItem} from "./redux/listReducer";

const List = () => {
    const [form, setForm] = useState({name: '', price: ''})
    const dispatch = useDispatch()
    const list = useSelector((state) => state.listReducer.list
    )
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <input onChange={e => setForm((prev) => ({...prev, name: e.target.value}))} value={form.name}/>
            <input onChange={e => setForm((prev) => ({...prev, price: e.target.value}))} value={form.price}/>
            <button onClick={() => dispatch(addItem(form))}>save</button>
            {list.map((item) => <div key={Math.random()}>{item.name} {item.price}  <button onClick={() => dispatch(removeItem(item.name))}>delete</button></div>)}
        </div>
    );
};

export default List;