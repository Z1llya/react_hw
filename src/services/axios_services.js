import axios from "axios";
import {baseURL} from "../components/constans/urls";



const axiosService = axios.create({baseURL});


export {axiosService}