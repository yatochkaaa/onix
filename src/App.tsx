import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header';
import Menu from './components/Menu';

import './styles/styles.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
    </div>
  );
}

export default App;
