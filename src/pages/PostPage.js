import {useParams,Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiServices from "../services/fetch-api-services";
import PostComponent from "../components/PostComponent";


export default function PostPage(){
    let {postId} = useParams();

    let apiServices = new ApiServices(`posts/`+postId);



    let [posts,setPost] = useState([]);


    useEffect(()=>{
        apiServices.getData().then(value => setPost(value));
    } ,[])

    return(
        <div>
            {
                posts.map(value => <PostComponent element ={value} key={value.id}/>)
            }

        </div>

    );

}