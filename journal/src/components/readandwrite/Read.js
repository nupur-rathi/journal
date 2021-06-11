import React, {useContext} from 'react';
import { JournalContext } from '../../context';

const Read = () =>
{
    const {read} = useContext(JournalContext);

    return (
        <div className="Read">{read}
        </div>
    );
}

export default Read;