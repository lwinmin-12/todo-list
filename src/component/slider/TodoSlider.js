import {createSlice} from "@reduxjs/toolkit";
import {logDOM} from "@testing-library/react";
const initialState = [
    {
        id : 1,
        name : 'Mya Mya',
        phone:123453
    },
    {
        id :2,
        name:'Hla Hla',
        phone: 1392342
    }
]
const  TodoSlider = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        Add:(state, action)=>{
            return [...state,action.payload]
        },
        Remove:(state,action)=>{
            console.log(state)

            return state.filter((i)=>i.id != action.payload)
        },
        Edit:(state,action)=>{
            console.log(state)
            state.map(i=> i.id == action.payload.id && )
        }
    }
})

export default TodoSlider.reducer
export const {Add,Remove,Edit} = TodoSlider.actions

// {...state,[i.name] : action.payload.editData.name}