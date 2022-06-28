import {useEffect, useState} from "react";
import {getUsers} from "../../services/user_api.services";
import User from "../User/User";

export default function Users({getUserId}) {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));


    }, [])
    return (
        <div>

            {
                users.map(value => <User item={value}  key = {value.id} getUserId={getUserId}/>)
            }
        </div>
    );
}
