import './App.css';
import Journal from './components/journal/Journal';
import ReadAndWrite from './components/readandwrite/ReadAndWrite';
import React from 'react';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Journal />
        <ReadAndWrite />
      </div>
    </Provider>
  );
}

export default App;
