const READ = "READ";
const WRITE = "WRITE";
const ADDENTRY = "ADDENTRY";
const EDITENTRY = "EDITENTRY";
const initialState = {read: "READ", write: "WRITE", listOfEntries: [], index: 0};

const reducer = (state = initialState, action) => {

    const {read, write, listOfEntries, index} = state;

    switch(action.type) {
        case READ:
            {
                let strng = `${action.payload.date} --> ${action.payload.text}`;
                return ({...state, read: strng, index: action.payload.id});
            }
        case WRITE:
            {
                return ({...state, write: action.payload}); 
            }
        case ADDENTRY:
            {
                let entry = {
                    date: (new Date()).toLocaleString(),
                    id: listOfEntries.length + 1,
                    text: listOfEntries.length + 1
                };
                let listitems = [...listOfEntries, entry];
                return ({...state, listOfEntries: listitems,  index: index});
            }
        case EDITENTRY:
            {
                (listOfEntries[index-1]).text = action.payload;
                return ({...state, listOfEntries: [...listOfEntries]});
            }

        default:
            return state;
    }
}

export default reducer;