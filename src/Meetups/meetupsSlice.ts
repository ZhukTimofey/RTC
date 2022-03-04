import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export type Meetups = {
    meetups:any[],
    isLoading:boolean,
    errors: null | any
}

export const fetchMeetups = createAsyncThunk(
    "meetups/fetch",
    async (value,thunkApi)=>{
        const resp = await axios.get("api/meetups")
        return  resp.data
    })

const initialState:Meetups = {
    meetups:[],
    isLoading: false,
    errors:null
}
export const meetupSlice = createSlice({
    name:"meetups",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
      builder.addCase(fetchMeetups.pending,(state,action)=>{
          state.isLoading = true
      })
          .addCase(fetchMeetups.fulfilled,(state,action)=>{
            state.isLoading = false
              state.meetups = action.payload
          })
          .addCase(fetchMeetups.rejected,(state,action)=>{
              state.isLoading = false
              state.errors = action.payload
          })
    }
})
export const {} = meetupSlice.actions

export default meetupSlice.reducer


