import React from 'react';
import TitleBar from './components/Titlebar';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
function App() {
  return (
    <>
      <ToastContainer
        hideProgressBar
        position='bottom-right'
        autoClose={1000}
      />
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
