import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/starWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
