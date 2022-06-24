import {useEffect, useState} from "react";
import User from "../User/User";

export default function Users(){

    let [users,setUsers] = useState([]);
    let [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });


    },[]);
    const info = (element)=>{
        setUser(element);


    }


    return(
        <div>
            {user.id && <div>{user.email} <p>{user.phone}</p></div>}
            <p>{users.map(user=><User
            key = {user.id}
            element = {user}
            info = {info}
            />)} </p>

        </div>
    );
}