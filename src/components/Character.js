function Character(props){
    let {name,img,description} = props;
    return(
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={img} alt=""/>
        </div>
    )
}
export default Character;