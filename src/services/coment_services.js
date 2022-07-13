import {axiosService} from "./axios_services";
import {urls} from "../components/constans/urls";





const commentService = {
    getAll: () => axiosService.get(urls.comments)
}
export {
    commentService
}