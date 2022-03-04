import React from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {fetchMeetups} from "./meetupsSlice";

const Meetups = () => {
    const store = useAppSelector((state=>state.meetups))
    const dispatch = useAppDispatch()
    const  getMeetups = async()=>{
            dispatch(fetchMeetups())
    }
    console.log(store)
    return (
        <div>
<button onClick={getMeetups}>
    meetups
</button>
        </div>
    );
};

export default Meetups ;