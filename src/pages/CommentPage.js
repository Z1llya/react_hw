
import CommentsComponent from "../components/CommentsComponent/CommentsComponent";
import {Outlet} from "react-router-dom";

export default function CommentPage(){
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
}