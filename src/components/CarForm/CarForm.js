import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../slice";

export default function CarForm(){
    const {reset,register,handleSubmit,setValue} = useForm();
    const {carForUpdate} = useSelector(state => state.cars)
    useEffect(()=>{
       if(carForUpdate){
           setValue('model',carForUpdate.model)
           setValue('price',carForUpdate.price)
           setValue('year',carForUpdate.year)
       }

    },[carForUpdate])
    const dispatch = useDispatch();
    const submit = async (data)=>{
        if(carForUpdate){
            await  dispatch(carActions.updateById({id:carForUpdate.id, car:data}))
        }else {
            await dispatch(carActions.create({car:data}))
        }
        reset()



    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={''} {...register('model')}/>
            <input type="text" placeholder={''} {...register('price')}/>
            <input type="text" placeholder={''} {...register('year')}/>
            <button>{carForUpdate ? "Update":"Create"}</button>


        </form>
    );
}

