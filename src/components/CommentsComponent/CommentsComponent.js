import {Link, Outlet} from "react-router-dom";
import ApiServices from "../../services/fetch-api-services";
import {useEffect, useState} from "react";
import CommentComponent from "./CommentComponent";

export default function CommentsComponent({element}){
    let apiServices = new ApiServices('comments');

    let [comments, setComments] = useState([]);

    useEffect(()=>{
        apiServices.getData().then(value => setComments([...value]))

    } ,[])

    return(
        <div>

            {
                comments.map(value => <CommentComponent element = {value} key = {value.id}/>)
            }

        </div>
    );
}