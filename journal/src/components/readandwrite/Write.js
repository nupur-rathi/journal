import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {write} from "../../actions";

const Write = () =>
{

    const writetext = useSelector(state => state.write);
    const dispatch = useDispatch();

    return (
        <textarea className="Write" value={writetext} onChange={(e)=>{dispatch(write(e.target.value))}}>
        </textarea>
    );
}

export default Write;