import React from 'react';
import TitleBar from './components/Titlebar.jsx';
import Home from './pages/Home.jsx';
import './App.css';
function App() {
  return (
    <>
      <TitleBar />
      <div className='App'>
        <div className='content'>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
