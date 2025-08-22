import { createReducer,on } from "@ngrx/store";
import { increament,decriment,reset } from "./couter.action";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increament,state=>state+1),
    on(decriment,state=>state-1),
    on(reset, state=> 0)
)