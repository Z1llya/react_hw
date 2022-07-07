import {useEffect, useState} from "react";
import ApiServices from "../services/fetch-api-services";
import PostComponent from "./PostComponent";

export default function PostsComponent({id}){
    let [posts,setPosts] = useState([]);

    let apiServices = new ApiServices(`posts/${id}`);
    console.log(apiServices);


    useEffect( ()=>{
        apiServices.getData().then(value=> setPosts(value))
    },[id])
    return(
        <div>
            {posts.map(value => <PostComponent element={value} key={value.id} />)}
            
        </div>
    );
}