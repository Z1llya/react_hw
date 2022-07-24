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

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id})=>{
       await carServices.deleteById(id);
        return id
    }
)
const create = createAsyncThunk(
    'carSlice/createById',
    async ({car})=>{
        const {data} = await carServices.create(car);
        return data
    }
)
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
            .addCase(deleteById.fulfilled,(state, action) => {
                const indexId = state.cars.findIndex(car=>car.id === action.payload);
                state.cars.splice(indexId,1);
            })
            .addCase(create.fulfilled,(state, action) => {
                state.cars.push(action.payload)
            })
    } )


});

const {reducer:carReducer, actions:{setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById,
    deleteById,
    create

}

export {
    carActions,
    carReducer
}