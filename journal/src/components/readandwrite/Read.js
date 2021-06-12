import React from 'react';
import { useSelector} from 'react-redux';

const Read = () =>
{
    const read = useSelector(state => state.read);

    return (
        <div className="Read">{read}
        </div>
    );
}

export default Read;