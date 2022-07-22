import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {carServices} from "../services";

const initialState ={
    cars:[],
    carForUpdate:null,
    errors:null
};

const getAll =createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue})=>{
    try {
        const {data} = await carServices.getAll();
        return data

    }catch (e){
        return rejectWithValue(e.response.data)
    }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateDyId',
    async ({id,car})=>{
        const {data} = await carServices.updateById(id,car);
        return data
    }
);
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:((state, action) => {
            state.carForUpdate = action.payload
        })
    },
    extraReducers:(builder =>{
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.erros = null
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.erros = action.payload
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const currentCar= state.cars.find(value =>value.id=== action.payload.id)
                Object.assign(currentCar,action.payload)
                state.carForUpdate = null
            })
    } )


});

const {reducer:carReducer, actions:{setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById

}

export {
    carActions,
    carReducer
}