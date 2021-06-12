import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {editentry} from "../../actions";

const SaveButton = () =>
{
    const write = useSelector(state=>state.write);
    const dispatch = useDispatch();

    return (
        <button className="SaveButton" onClick={()=>{dispatch(editentry(write))}}>Save</button>
    );
}

export default SaveButton;