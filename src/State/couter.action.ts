import { createAction } from "@ngrx/store";

export const increament = createAction('[COUNTER COMPONENT] Increment');
export const decriment = createAction('[COUNTER COMPONENT] Decriment');
export const reset = createAction('[COUNTER COMPONENT] Reset');