import React, {useContext} from 'react';
import { JournalContext } from '../../context';

const Write = () =>
{

    const {write, writeFunc} = useContext(JournalContext);

    return (
        <textarea className="Write" value={write} onChange={(e)=>{writeFunc(e.target.value)}}>
        </textarea>
    );
}

export default Write;