import React, {useContext} from 'react';
import { JournalContext } from '../../context';

const SaveButton = () =>
{
    const {write, editEntry} = useContext(JournalContext);

    return (
        <button className="SaveButton" onClick={()=>{editEntry(write)}}>Save</button>
    );
}

export default SaveButton;