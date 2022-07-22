import axios from "axios";
import {baseurl} from "../constans";


const axiosService = axios.create({baseurl});

export {
    axiosService
}


