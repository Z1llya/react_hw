import ApiServices from "../services/fetch-api-services";
import {useEffect, useState} from "react";
import AlbumsComponent from "../components/AlbumsComponent";

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