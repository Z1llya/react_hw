export default function User({element,info}){
    return(
        <div>
            {element.id} {element.name}
            <button onClick={()=>{
                info(element);
            }}>details</button>

        </div>
    );
}