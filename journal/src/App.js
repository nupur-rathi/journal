import './App.css';
import Journal from './components/journal/Journal';
import ReadAndWrite from './components/readandwrite/ReadAndWrite';
import React, {useState} from 'react';
import JournalProvider, {JournalContext} from './context';


function App() {

  return (
    <JournalProvider>
      <div className="App">
        <Journal />
        <ReadAndWrite />
      </div>
    </JournalProvider>
  );
}

export default App;
