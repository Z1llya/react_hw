import {useDispatch, useSelector} from "react-redux";
import Car from "../Car/Car";
import {useEffect} from "react";
import {carActions} from "../../slice";

export default function Cars(){
    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())

    },[])
    return(
        <div>
            {cars.map(car=><Car key = {car.id} car={car}/>)}

        </div>
    );
}