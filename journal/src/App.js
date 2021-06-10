import './App.css';
import Journal from './components/journal/Journal';
import ReadAndWrite from './components/readandwrite/ReadAndWrite';
import React, {useState} from 'react';


function App() {

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
    <div className="App">
      <Journal listOfEntries={listOfEntries} setListOfEntries={setListOfEntries} addEntry={addEntry} setReadText={readFunc} setWriteText={writeFunc}/>
      <ReadAndWrite readProp={read} writeProp={write} setWriteText={writeFunc} editEntry={editEntry}/>
    </div>
  );
}

export default App;
