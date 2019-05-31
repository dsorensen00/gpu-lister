import React from 'react';
import Totals from './Components/Totals';
import './Styles/main.css'
import List from './Components/List';

const App: React.FC = () => {
  return (
    <>
      <Totals />
      <List />
    </>
  );
}

export default App;
