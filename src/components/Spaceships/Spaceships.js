import {useEffect, useState} from "react";
import Spaceship from "../Spaceship/Spaceship";

export default function Spaceships(){

    let [ships,setShips] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setShips(value.filter(value=>value.launch_year !=='2020'));
            });
    },[]);




    return(
        <div>
            {ships.map(ship =>
                <Spaceship
                    element={ship}
                />)
            }

        </div>
    );
}