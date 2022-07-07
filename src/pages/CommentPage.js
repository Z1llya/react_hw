import ApiServices from "../services/fetch-api-services";
import {useEffect, useState} from "react";
import CommentsComponent from "../components/CommentsComponent";
import {Outlet} from "react-router-dom";

export default function CommentPage(){
    let apiServices = new ApiServices('comments');

    let [comments, setComments] = useState([]);

    useEffect(()=>{
        apiServices.getData().then(value => setComments(value))

    } ,[])

    return(
        <div>
            {
                comments.map(value => <CommentsComponent element = {value} key = {value.id}/>)
            }
            <Outlet/>
        </div>
    );
}