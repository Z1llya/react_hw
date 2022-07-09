import {Link} from "react-router-dom";

export default function CommentComponent({element}){
    return(
        <div>
            {element.name} - {element.id}
            <Link to ={element.postId.toString()}> post </Link>
        </div>
    );
}