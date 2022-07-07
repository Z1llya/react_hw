import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ApiServices from "../services/fetch-api-services";
import PostsComponent from "../components/PostsComponent";


export default function PostPage(){
    let {id} = useParams();




    return(
        <div>
            <PostsComponent id={{id}}/>
        </div>
    );
}