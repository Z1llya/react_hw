import {useEffect, useState} from "react";
import ApiServices from "../../services/fetch-api-services";
import PostComponent from "./PostComponent";
import {useParams} from "react-router-dom";

export default function PostsComponent(){
    let [posts,setPosts] = useState([]);

    let {id} = useParams();

    let apiServices = new ApiServices(`posts/${id}`);
    console.log(apiServices);


    useEffect( ()=>{
        apiServices.getData().then(value=> setPosts([{...value}]))
    },[id])
    return(
        <div>
            {posts.map(value => <PostComponent element={value} key={value.id} />)}
            
        </div>
    );
}