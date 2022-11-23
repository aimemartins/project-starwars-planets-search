import React from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import StarWarsProvider from './context/starWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Search />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
