import React from 'react';

function AddButton({addEntry})
{
    return (
        <button className="AddButton" onClick={addEntry}>Add Entry
        </button>
    );
}

export default AddButton;