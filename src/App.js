
import React from 'react';
import './App.css';
import Counters from './Components/Counters'
import NavBar from './Components/NavBar';
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container" style={{ paddingTop: '50px' }}>
        <Counters />
      </main>
    </React.Fragment>

  );
}

export default App;
