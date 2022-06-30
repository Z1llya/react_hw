import axios from "axios";

let axiosInstance = axios.create(
    {
        baseURL:'https://jsonplaceholder.typicode.com/users',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }
)
const postUser = (post) => axiosInstance.post('',{data:post});
export {postUser}