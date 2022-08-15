import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import PostItem from "./Components/PostItem";
import MainPage from "./Components/MainPage";
import CreatePostForm from "./Components/CreatePostForm";
import PostEdit from "./Components/PostEdit";


function App() {
  return (
    <div className="App">


        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/posts/new" element={<CreatePostForm/>}/>
            <Route path="/posts/:id" element={<PostItem/>}/>
            <Route path="/posts/edit" element={<PostEdit/>}/>
        </Routes>
    </div>
  );
}

export default App;
