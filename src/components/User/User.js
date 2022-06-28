export default function User({item,getUserId}){

    const showPost = () =>{
        getUserId(item.id);
    }

    return(
        <div>
           <h2>{item.name}  {item.username}</h2>
            <button onClick={showPost}>show posts</button>
        </div>
    );
}