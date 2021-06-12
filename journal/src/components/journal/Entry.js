import React from 'react';
import {useDispatch } from 'react-redux';
import {read, write} from "../../actions";

function Entry({date, entry, id})
{
    const dispatch = useDispatch();

    return (
        <div className="Entry" onClick={()=>{dispatch(read(date, entry, id)); dispatch(write(entry));}}>{date}</div>
    );
}

export default Entry;