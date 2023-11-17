import { createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.actions";

const inititalState = 0;
export const counterReducer = createReducer(
    inititalState, 
    on(increment, (state, action) => state + action.value), 
    on(decrement, (state, action) => state - action.value),
    on(set, (state, action) => action.value));

