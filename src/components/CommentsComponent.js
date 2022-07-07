import {Link} from "react-router-dom";

export default function CommentsComponent({element}){
    return(
        <div>
            <Link to ={element.postId.toString()}> {element.name} - {element.id} </Link>

        </div>
    );
}