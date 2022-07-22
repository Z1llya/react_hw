import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {carServices} from "../services";

const initialState ={
    cars:[],
    errors:null
};

const getAll =createAsyncThunk(
    'carSlice/getAll',
    async ()=>{

            const {data} = await carServices.getAll();
            return data

    }
)
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) =>
        builder
            .addCase(getAll.fulfilled,(state, action) =>{
                state.errors = null
                state.cars = action.payload})
            .addCase(getAll.rejected,(state, action) =>{
            state.errors = action.payload})
});

const {reducer:carReducer} = carSlice;

const carActions = {
    getAll

}

export {
    carActions,
    carReducer
}