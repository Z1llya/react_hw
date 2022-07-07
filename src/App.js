import {Link,Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import AlbumPage from "./pages/AlbumPage";
import CommentPage from "./pages/CommentPage";
import PostPage from "./pages/PostPage";


function App() {
  return (
    <div >
      <div>
        <h2>Menu</h2>
        <ul>
          <li><Link to={"/"}> home </Link></li>
          <li><Link to={"todos"}> todos </Link></li>
          <li><Link to={"albums"}> albums </Link></li>
          <li><Link to={"comments"}> comments </Link></li>
        </ul>
      </div>

      <div>
          <h2>Content</h2>
        <Routes>
          <Route path={'/'} element ={<HomePage/>}/>
          <Route path={'todos'} element ={<TodoPage/>}/>
          <Route path={'albums'} element ={<AlbumPage/>}/>
          <Route path={'comments'} element ={<CommentPage/>}>
              <Route path={':id'} element ={<PostPage/>}/>
          </Route>


        </Routes>
      </div>



    </div>
  );
}

export default App;
