import React from 'react';
import Totals from './Components/Totals';
import './Styles/main.css'
import List from './Components/List';

const App: React.FC = () => {
  return (
    <>
      <Totals />
      <List />

      <script src="jplist/jplist.min.js"></script>
      <script>jplist.init();</script>
    </>
  );
}

export default App;
