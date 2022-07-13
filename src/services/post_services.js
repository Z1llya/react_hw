import {axiosService} from "./axios_services";
import {urls} from "../components/constans/urls";



const postService = {
    getAll: () => axiosService.get(urls.posts)
}
export {
    postService
}