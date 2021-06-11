import React, {useState, createContext} from 'react';

export const JournalContext = createContext();

const JournalProvider = (props) => {
    const [read, setRead] = useState("Read");
    const [write, setWrite] = useState("Write");

    const [index, setIndex] = useState(0);

    const [listOfEntries, setListOfEntries] = useState([]);

    const addEntry = () => {
        let entry = {
            date: (new Date()).toLocaleString(),
            id: listOfEntries.length + 1,
            text: listOfEntries.length + 1
        };
        let listitems = [...listOfEntries, entry];
        setListOfEntries(listitems);
    }

    const editEntry = (text) => {
        let listitems = [...listOfEntries];
        (listitems[index-1]).text = text;
        setListOfEntries(listitems);
    }

    const readFunc = (date, text, id) => {
        let strng = `${date} --> ${text}`;
        setRead(strng);
        setIndex(id);
    };

    const writeFunc = (text) => {
        setWrite(text);
    };

    return (
        <JournalContext.Provider value = {{read, setRead, write, setWrite, index, setIndex, listOfEntries, setListOfEntries, addEntry, editEntry, readFunc, writeFunc}}>
            {props.children}
        </JournalContext.Provider>
    );

}

export default JournalProvider;