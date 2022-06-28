
import './App.css';
import Users from "./components/Users/Users";
import {getPost} from "./services/user_api.services";
import {useState} from "react";


export default function App() {
    let [posts, setPosts] = useState([]);

    const getUserId = (id) => {
        getPost(id).then(({data}) => setPosts([...data]));
    }

        return (
            <div>
                <div><Users getUserId={getUserId}/></div>
                <h1>Posts</h1>
                {
                    posts.map(value => <div>{value.body}</div>)
                }




            </div>
        );

}


