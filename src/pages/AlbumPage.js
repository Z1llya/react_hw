import ApiServices from "../services/fetch-api-services";
import AlbumsComponent from "../components/AlbumsComponent/AlbumsComponent";

import {useEffect, useState} from "react";

export default function AlbumPage(){

    let apiServices = new ApiServices('albums');

    let [albums, setAlbums] = useState([]);

    useEffect(()=>{
        apiServices.getData().then(value => setAlbums(value))

    } ,[])

    return(
        <div>
            {
                albums.map(value => <AlbumsComponent element={value} key = {value.id}/> )
            }
        </div>
    );
}