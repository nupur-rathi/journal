const READ = "READ";
const WRITE = "WRITE";
const ADDENTRY = "ADDENTRY";
const EDITENTRY = "EDITENTRY";


export const read = (date, text, id) => {
    return {
        type: READ,
        payload: {
            date: date,
            text: text,
            id: id,
        }
    };
};

export const write = (text) => {
    return {
        type: WRITE,
        payload: text,
    };
};

export const addentry = () => {
    return {
        type: ADDENTRY
    };
};

export const editentry = (text) => {
    return {
        type: EDITENTRY,
        payload: text,
    };
};