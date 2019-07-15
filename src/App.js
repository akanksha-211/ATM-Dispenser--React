import React from 'react';
import './App.css';

// components
import Heading from './components/heading'
import ATMTally from './components/atmTally'

const notes = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000]

function App() {
  return (
    <div className="App">
        <header className="header">
            <Heading size="2" text= "ATM Money Dispenser"/>
        </header>
        <main>
            <ATMTally notes={notes} />
        </main>
    </div>
  );
}

export default App;
