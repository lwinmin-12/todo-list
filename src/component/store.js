import {configureStore} from "@reduxjs/toolkit";
import TodoSlider from "./slider/TodoSlider";

const store = configureStore({
    reducer:{
        todo:TodoSlider
    }
})
export default store