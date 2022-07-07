import ApiServices from "../services/fetch-api-services";
import {useEffect, useState} from "react";
import TodosComponents from "../components/TodosComponents";

export default function TodoPage(){

    let apiServices = new ApiServices('todos');
    let [todo,setTodo] = useState([]);

    useEffect(()=>{
        apiServices.getData().then(value => setTodo(value));
    } ,[])

    return(
        <div>
            {
                todo.map(value => <TodosComponents element={value} key={value.id}/>)
            }

        </div>
    );
}