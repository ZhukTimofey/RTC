import {configureStore} from "@reduxjs/toolkit";
import meetupsReducer from "../Meetups/meetupsSlice"

export const store = configureStore({reducer:{meetups:meetupsReducer}})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch