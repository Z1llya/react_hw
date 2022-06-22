import React from "react";
function Character(props){
    let {id,name,status,gender,species,image} = props;
    return(
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{status}</p>
            <p>{gender}</p>
            <p>{species}</p>
            <img src={image} alt =''/>

        </div>
    )

}
export default Character