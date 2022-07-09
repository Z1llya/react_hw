import {useEffect, useState} from "react";


import ApiServices from "../../services/fetch-api-services";
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